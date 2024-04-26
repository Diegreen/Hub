import { Inputs } from "../Inputs";
import KenzieHubLogo from "../../assets/images/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchema } from "../formSchema";
import { api } from "../../services/api";
import { useContext } from "react";
import { PropsContext } from "../../providers/context";

export const Register = () => {
  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: zodResolver(formSchema)
  });

  
  const {userRegister, navigate} = useContext(PropsContext)


  const submit = (formData) => {
    navigate("/");
    userRegister(formData);
  };

  return (
    <section className="registerPageSection">
      <div className="divTwo">
        <img src={KenzieHubLogo} alt="" />
        <nav>
          <Link to="/">Voltar</Link>
        </nav>
      </div>
      <form action="" onSubmit={handleSubmit(submit)}>
        <div className="div">
          <h2>Crie sua conta</h2>
          <p>Rapido e grátis, vamos nessa</p>
        </div>

        <Inputs
          type="text"
          label="Nome"
          placeholder="Digite aqui seu nome"
          {...register("name")}
          error={errors.name}
        />
        <Inputs
          type="email"
          label="Email"
          placeholder="Digite aqui seu email"
          {...register("email")}
          error={errors.email}
        />
        <Inputs
          type="password"
          label="Senha"
          placeholder="Digite aqui sua senha"
          {...register("password")}
          error={errors.password}
        />
        <Inputs
          type="password"
          label="Confirmar Senha"
          placeholder="Confirme aqui sua senha"
          {...register("verifyPassword")}
          error={errors.verifyPassword}
        />
        <Inputs
          type="text"
          label="Bio"
          placeholder="Digite aqui seu nome"
          {...register("bio")}
          error={errors.bio}
        />
        <Inputs
          type="text"
          label="Contato"
          placeholder="Digite aqui seu numero"
          {...register("contact")}
          error={errors.contact}
        />
        <label htmlFor="select" className="selectLabel">
          Selecionar Módulo
        </label>
        <select
          name="select"
          {...register("course_module")}   
        >
          <option value="">Selecione um Modulo</option>
          <option value="Primeiro Modulo">Primeiro Modulo</option>
          <option value="Segundo Modulo">Segundo Modulo</option>
          <option value="Terceiro Modulo">Terceiro Modulo</option>
          <option value="Quarto Modulo">Quarto Modulo</option>
        </select>
        <button type="submit">Cadastrar</button>
      </form>
    </section>
  );
};
