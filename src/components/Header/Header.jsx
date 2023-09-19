import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Link to={`/main`}>
        <span>
          <img src="https://i.imgur.com/BKOAfG2.png" />OneDota
        </span>
      </Link>
    </>
  );
}