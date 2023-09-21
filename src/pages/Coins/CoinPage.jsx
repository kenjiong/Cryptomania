import CoinInfo from "../../components/Coins/CoinInfo";

export default function CoinPage({ fiat }) {
  return (
    <div>
      <CoinInfo fiat={fiat} />
    </div>
  );
}
