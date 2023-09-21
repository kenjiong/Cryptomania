import ConverterForm from "../../components/CoinConverter/ConverterForm";

export default function ConverterPage({ coins }) {
  return (
    <div className="container text-center">
      <ConverterForm coins={coins} />
    </div>
  );
}