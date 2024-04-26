import React from "react";
import { useForm } from "react-hook-form";
import { Inputs } from "../Inputs";
import styles from "./style.module.scss";
import { useContext } from "react";
import { PostContext } from "../../providers/PostContext";
import { PropsContext } from "../../providers/context";


export const RegisterTechFormModal = ({ onClose }) => {
  const { register, handleSubmit } = useForm();
  const { postCreate } = useContext(PropsContext);

  const submit = (formData) => {
    postCreate(formData);
    console.log("aqui");
    onClose(); 
  };

  return (
    <section className={styles.sectionContet}>
      <div className={styles.content}>
        <div className={styles.divContent}>
          <h2>Cadastrar Tecnologia</h2>
          <button onClick={onClose}>X</button>
        </div>
        <form action="dialog" onSubmit={handleSubmit(submit)}>
          <Inputs
            label="Nome"
            placeholder="Tecnologia"
            {...register("title")}
          />
          <div className={styles.divSelect}>
            <label htmlFor="select">Selecionar status</label>
            <select name="select" id="" {...register("status")}>
              <option value="iniciante">Iniciante</option>
              <option value="intermediario">Intermediario</option>
              <option value="avançado">Avançado</option>
            </select>
          </div>
          <button type="submit">Cadastrar Tecnologia</button>
        </form>
      </div>
    </section>
  );
};
