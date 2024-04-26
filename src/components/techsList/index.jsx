import React, { useContext, useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { TechListCard } from "./techsCard";
import { PropsContext } from "../../providers/context";
import { RegisterTechFormModal } from "../createModal/index.jsx";
import { EditTechsModal } from "../EditTechModal";

export const TechList = () => {
  const { userTechs } = useContext(PropsContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingTech, setEditingTech] = useState(null);

  useEffect(() => {
    console.log("userTechs", userTechs);
  }, [userTechs]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openEditModal = (tech) => {
    setEditingTech(tech);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <div className={styles.divTechs}>
      <div className={styles.subDivTechs}>
        <h2>Tecnologias</h2>
        <button onClick={openModal}>+</button>
      </div>
      <div className={styles.techList}>
        {userTechs.map((tech) => (
          <TechListCard
            key={tech?.id}
            post={tech}
            openEditModal={openEditModal}
          />
        ))}
      </div>

      {isModalOpen && <RegisterTechFormModal onClose={closeModal} />}
      {isEditModalOpen && (
        <EditTechsModal techToEdit={editingTech} onClose={closeEditModal} />
      )}
    </div>
  );
};
