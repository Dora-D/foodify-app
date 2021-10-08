import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";

import closeIcon from "../../assets/imgs/close-icon.svg";
import "./modal.scss";

interface IModal {
  hendleModal: () => void;
  onSubmit: (e: any) => void;
}

export const Modal: FC<IModal> = ({ hendleModal, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <div className="modal-overlay">
      <form className="modal" onSubmit={handleSubmit(onSubmit)}>
        <button
          className="modal__close-modal"
          type="button"
          onClick={hendleModal}
        >
          <img src={closeIcon} alt="close-icon" />
        </button>
        <h1>Add custom dish</h1>
        <input
          {...register("title", {
            required: true,
            validate: (value) => value.trim().length > 2,
          })}
          type="text"
          placeholder="Dish title"
        />
        {errors.title && (
          <span>This entry cannot be less than 3 characters</span>
        )}
        <textarea
          {...register("recipe", {
            required: true,
            validate: (value) => value.trim().length > 4,
          })}
          placeholder="Dish description..."
        />
        {errors.recipe && (
          <span>This entry cannot be less than 5 characters</span>
        )}
        <button type="submit" className="modal__submit">
          Add custom dish
        </button>
      </form>
    </div>
  );
};
