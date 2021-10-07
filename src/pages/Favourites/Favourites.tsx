import { useState } from "react";
import { createPortal } from "react-dom";

import { Modal } from "../../components/Modal/Modal";

import { BaseFavouritesDishes, IDishes } from "../../static";
import plusIcon from "../../assets/imgs/plus-icon.svg";
import "./favourites.scss";

export const Favourites = () => {
  const [favouritesDishes, setFavouritesDishes] =
    useState<IDishes[]>(BaseFavouritesDishes);

  const [isModal, setIsModal] = useState<boolean>(false);

  const portal = document.getElementById("portal") as HTMLElement;

  const hendleModal = () => setIsModal((prevState) => !prevState);

  const onSubmit = () => {
    hendleModal();
  };

  return (
    <div className="favourites">
      <button className="favourites__add-recipe" onClick={hendleModal}>
        <img src={plusIcon} alt="Plus Recipe" />
      </button>
      {isModal &&
        createPortal(
          <Modal hendleModal={hendleModal} onSubmit={onSubmit} />,
          portal
        )}
    </div>
  );
};
