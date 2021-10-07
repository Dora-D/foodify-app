import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">11111</Link>
        </li>
        <li>
          <Link to="/favourites">2222</Link>
        </li>
      </ul>
    </header>
  );
};
