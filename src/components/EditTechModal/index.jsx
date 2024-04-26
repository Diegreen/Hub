import { useContext, useState } from "react";
import { Inputs } from "../Inputs";
import styles from "./style.module.scss";
import { PropsContext } from "../../providers/context";
import { useForm } from "react-hook-form";


export const EditTechsModal = ({onClose}) => {
  const { editingTech, setEditingTech} = useContext(PropsContext)
  const { register, handleSubmit } = useForm({

  });



  const submit = (formData) => {

  };
  return (
    <section className={styles.content}>
      <div className={styles.divContent}>
        <h2>Tecnologias Detalhes</h2>
        <button onClick={onClose}>X</button>
      </div>
      <form action="dialog" onSubmit={handleSubmit(submit)}>
        <Inputs label="Nome" placeholder="Material UI"  {...register("title")}/>
        <div className={styles.divSelect}>
          <label htmlFor="select">Status</label>
          <select name="select" id=""  {...register("status")}>
            <option value="iniciante">Iniciante</option>
            <option value="intermediario">Intermediario</option>
            <option value="avançado">Avançado</option>
          </select>
        </div>
        <button>Salvar alterações</button>
      </form>
    </section>
  );
};
