import { Link } from "react-router-dom";

export default function HeroCard({ hero }) {
  return (
    <>
      <div>
        <p>
          <img src={`${hero.img}`} alt={`${hero.localized_name} logo`} />
        </p>
        <p>
          <Link to={`/heroes/${hero.id}`}>{hero.localized_name}</Link>
        </p>
      </div>
    </>
  );
}