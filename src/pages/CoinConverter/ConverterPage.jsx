import ConverterForm from "../../components/CoinConverter/ConverterForm";

export default function ConverterPage({ coins }) {
  return (
    <div>
      <ConverterForm coins={coins} />
    </div>
  );
}