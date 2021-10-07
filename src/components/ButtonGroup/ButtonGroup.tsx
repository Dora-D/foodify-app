import { FC } from "react";

import "./button-group.scss";

interface IButtonGroup {
  onSkip: () => void;
  onLike: () => void;
}

export const ButtonGroup: FC<IButtonGroup> = ({ onSkip, onLike }) => (
  <div className="button-group">
    <button onClick={onSkip}>Skip</button>
    <button onClick={onLike}>Like</button>
  </div>
);
