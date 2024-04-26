import { useContext, useState } from "react";
import KenzieHubLogo from "../../assets/images/Logo.png";
import { Inputs } from "../Inputs";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "../loginSchema";
import { PropsContext } from "../../providers/context";


export const LoginPage = () => {

  const { register, handleSubmit, formState: {errors}} = useForm({
    resolver: zodResolver(loginFormSchema)
  })

  const [loading, setLoading] = useState(false)

  const {userLogin} = useContext(PropsContext)

  const submit = (formData) => {
    userLogin(formData, setLoading)
  }

  return (
    <section className="sectionLoginPage">
      <img src={KenzieHubLogo} alt="" />
      <form action="" onSubmit={handleSubmit(submit)}>
        <h2>Login</h2>
        <Inputs
          type="text"
          label="Email"
          placeholder="euamominhanamorada@gmail.com"
          {...register("email")}
          error={errors.email}
        />
        <Inputs
          type="password"
          label="Senha"
          placeholder="●●●●●●●●●●●●●"
          {...register("password")}
          error={errors.password}
        />
        <button type="submit" className="one">Entrar</button>
        <p>Ainda não possui uma conta?</p>
        <nav>
          <button className="two" type="submit">
            <Link to="/register">Cadastre-se</Link>
          </button>
        </nav>
      </form>
    </section>
  );
};
