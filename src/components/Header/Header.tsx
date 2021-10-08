import { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

import "./header.scss";

export const Header: FC = () => {
  const [isMd, setIsMd] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const windowInnerWidth = window.innerWidth;

  const portal = document.getElementById("portal") as HTMLElement;

  if (windowInnerWidth < 960 && !isMd) {
    setIsMd(true);
  }

  const hendleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <header className="header">
      <nav>
        <ul className={isMd ? "disabled" : ""}>
          <li>
            <Link to="/">Random Dish</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
          </li>
        </ul>
        {isMd && (
          <button
            onClick={hendleMenu}
            className="header__mobile-button mobile-button"
          >
            <i className="fas fa-bars"></i>
          </button>
        )}
      </nav>
      {showMenu &&
        createPortal(<HeaderModal hendleMenu={hendleMenu} />, portal)}
    </header>
  );
};

export const HeaderModal = ({ hendleMenu }: { hendleMenu: () => void }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <div className="header-modal-overlay" onClick={hendleMenu}>
      <div className="header-modal">
        <div className="header-modal__wrapper">
          <button className="header-modal__mobile-button mobile-button">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Random Dish</Link>
            </li>
            <li>
              <Link to="/favourites">Favourites</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
//959
