import AllHeroes from "../../components/Heroes/AllHeroes";

export default function HeroesListPage({heroes}) {
  return (
    <div>
      <AllHeroes heroes={heroes} />
    </div>
  );
}
