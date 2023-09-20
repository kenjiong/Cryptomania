import { Link } from "react-router-dom";
import logo from "../../assets/crypto.png";

export default function Header() {
  return (
    <>
      <Link to={`/main`}>
        <h1>
          <img src={logo} />
          Cryptomania
        </h1>
        Get cryptocurrency at a steal!
      </Link>
    </>
  );
}
