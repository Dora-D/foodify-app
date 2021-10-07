import { useState } from "react";
import { createPortal } from "react-dom";

import plusIcon from "../../assets/imgs/plus-icon.svg";
import "./favourites.scss";

export const Favourites = () => {
  const [isModal, setIsModal] = useState<boolean>(false);

  const portal = document.getElementById("portal") as HTMLElement;

  const hendleModal = () => setIsModal((prevState) => !prevState);

  return (
    <div className="favourites">
      <button className="favourites__add-recipe" onClick={hendleModal}>
        <img src={plusIcon} alt="Plus Recipe" />
      </button>
      {isModal && createPortal(<h1>Portal</h1>, portal)}
    </div>
  );
};
