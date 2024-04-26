import styles from "../techsCard/styles.module.scss";
import editIcon from "../../../assets/images/edit_FILL0_wght400_GRAD0_opsz48 1.svg";
import deleteIcon from "../../../assets/images/delete.svg";
import { useContext } from "react";
import { PostContext } from "../../../providers/PostContext";
import { PropsContext } from "../../../providers/context";

export const TechListCard = ({ post, setTechsEdit, openEditModal }) => {
  console.log("POST", post);

  const { deleteTech } = useContext(PropsContext);

  const handleDeleteClick = async () => {
    try {

      await deleteTech(post.id);

    } catch (error) {
      console.log(error);
    }
  };
  const handleEditClick = () => {
    setTechsEdit(post);
    setIsModalOpen(true);
  };

  return (
    <div className={styles.content}>
      <h3>{post.title}</h3>
      <div>
        <p>{post.status}</p>
        <div>
          <button>
            <img
              className="one"
              onClick={openEditModal}
              src={editIcon}
              alt=""
            />
          </button>
          <button onClick={handleDeleteClick}>
            <img className="two" src={deleteIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
