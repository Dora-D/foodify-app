import { useState } from "react";
import { createPortal } from "react-dom";

import plusIcon from "../../assets/imgs/plus-icon.svg";
import "./favourites.scss";

export const Favourites = () => {
  const [isModal, setIsModal] = useState<boolean>(false);

  return (
    <div className="favourites">
      <button className="favourites__add-recipe">
        <img src={plusIcon} alt="Plus Recipe" />
      </button>
    </div>
  );
};
