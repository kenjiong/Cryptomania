import HeroCard from "./HeroCards";

export default function AllHeroes({ heroes }) {
  return (
    <>
      {heroes.map((hero) => (
        <div key={hero.id}>
          <HeroCard hero={hero} />
        </div>
      ))}
    </>
  );
}