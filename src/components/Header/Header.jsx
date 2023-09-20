import { Link } from "react-router-dom";
import logo from "../../assets/crypto.png";

export default function Header() {
  return (
    <>
      <Link to={`/main`}>
      <img className="logo" src={logo} />
      </Link>
        <h1>
          Cryptomania
        </h1>
        Get cryptocurrency at a steal!
    </>
  );
}
