import HeroCard from "./HeroCards";

export default function AllHeroes({ heroes }) {
  return (
    <>
      {heroes.map((hero, index) => (
        <div key={hero.id}>
          <HeroCard hero={hero} index={index} />
        </div>
      ))}
    </>
  );
}