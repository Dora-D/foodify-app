import { useEffect } from "react";

import "./modal.scss";

export const Modal = () => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <div className="modal-overlay">
      <form className="modal">
        <h1>Add custom dish</h1>
        <input type="text" />
        <textarea />
        <button type="submit">Add custom dish</button>
      </form>
    </div>
  );
};
