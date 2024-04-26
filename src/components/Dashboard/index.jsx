import { Link } from "react-router-dom";
import KenzieLogoHub from "../../assets/images/Logo.png";
import { useContext, useEffect } from "react";
import { PropsContext } from "../../providers/context";
import { TechList } from "../techsList";
import { RegisterTechFormModal } from "../createModal";

export const Dashboard = () => {
  const { user, userLogout } = useContext(PropsContext);

  return (
    <section className="dashboardSection">
      <div className="divDashboard one">
        <img src={KenzieLogoHub} alt="" />
        <nav>
          <button onClick={() => userLogout()}>
            <Link to="/">Sair</Link>
          </button>
        </nav>
      </div>
      <div className="divDashboard two">
        <h1>Olá, {user?.name} </h1>
        <p>{user?.course_module} (Introdução ao Frontend)</p>
      </div>
      <div className="divDashboard three">
        <h1>Que pena! Estamos em desenvolvimento...</h1>
        <p>Nossa aplicação está em desenvolvimento.</p>
      </div>
    </section>
  );
};
