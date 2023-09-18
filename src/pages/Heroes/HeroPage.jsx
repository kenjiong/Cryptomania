import HeroInfo from "../../components/Heroes/HeroInfo";

export default function HeroPage({ heroes }) {
  return (
    <div>
      <HeroInfo heroes={heroes} />
    </div>
  );
}
