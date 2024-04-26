import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const PropsContext = createContext({});

export const PropsProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userTechs, setUserTechs] = useState(null);
  const navigate = useNavigate(PropsProvider);
  const [techsEdit, setTechsEdit] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@TOKEN");
      const userId = localStorage.getItem("@USERID");

      if (token && userId) {
        try {
          const { data } = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(data);
          setUserTechs(data.techs);
          navigate("/dashboard");
        } catch (error) {
          console.log(error);
          localStorage.removeItem("@TOKEN");
          localStorage.removeItem("@USERID");
        }
      }
    };
    loadUser();
  }, []);

  const deleteTech = async (techId) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await api.delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserTechs((prevTechs) =>
        prevTechs.filter((tech) => tech.id !== techId)
      );
    } catch (error) {
      console.log("Erro na solicitação de exclusão:", error);
    }
  };

  const userRegister = async (formData) => {
    try {
      const { data } = await api.post("/users", formData);
      console.log(data);
      alert("Cadastro realizado com sucesso");
    } catch (error) {
      console.log(error);
      if (error.response?.data === "Request failed with status code 401") {
        alert("Usuario já cadastrado");
      }
    }
  };

  const userLogin = async (formData, setLoading) => {
    try {
      setLoading(true);
      const { data } = await api.post("/sessions", formData);

      console.log("data", data);
      localStorage.setItem("@TOKEN", data.token);
      localStorage.setItem("@USERID", data.user.id);
      setUser(data.user);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      if (error.response?.data === "Incorrect email / password combination") {
        alert("o email e senha não correspondem");
      }
    } finally {
      setLoading(false);
    }
  };

  const postCreate = async (formData) => {
    try {
      const newPost = { ...formData };
      const token = localStorage.getItem("@TOKEN");
      console.log(typeof token, token)
      const createResponse = await api.post("/users/techs", newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = createResponse.data
      setUserTechs((prevTechs) => [...prevTechs, data]);
      console.log(data);
  } catch (error) {
    console.log(error.response.data.message);
  }
};

  const userLogout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setUser(null);
    navigate("/");
  };

  const techsUpdate = async (formData) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const { data } = await api.patch(`/users/${techsEdit.id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
    } catch (error) {}
  };

  return (
    <PropsContext.Provider
      value={{
        user,
        techsUpdate,
        setTechsEdit,
        techsEdit,
        userTechs,
        userLogin,
        userRegister,
        navigate,
        userLogout,
        deleteTech,
        postCreate
      }}
    >
      {children}
    </PropsContext.Provider>
  );
};

export const usePropsContext = () => useContext(PropsContext);
