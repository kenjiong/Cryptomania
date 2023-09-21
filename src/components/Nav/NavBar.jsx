import { Link } from "react-router-dom";
import FiatSelector from "../FiatSelector/FiatSelector";

export default function NavBar({fiat, changeFiat}) {
  return (
    <>
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link to={`/main`} className="nav-link link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Home</Link>
        </li>
        <li className="nav-item">
      <Link to={`/coins`} className="nav-link link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Coins</Link>
      </li>
      <li className="nav-item">
      <Link to={`/converter`} className="nav-link link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Coin Converter</Link>
      </li>
      </ul>
      <ul className="nav justify-content-end">
      <li className="nav-link link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
      Currency: <FiatSelector fiat={fiat} changeFiat={changeFiat}/>
      </li>
      </ul>
      </>
  );
}
