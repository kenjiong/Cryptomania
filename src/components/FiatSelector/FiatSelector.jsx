export default function FiatSelector({ changeFiat }) {
  const handleFiatChange = (event) => {
    changeFiat(event.target.value);
  }

  return (
    <>
      <select onChange={handleFiatChange}>
        <option value="USD" selected="selected">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="SGD">SGD</option>
        <option value="AUD">AUD</option>
        <option value="HKD">HKD</option>
        <option value="JPY">JPY</option>
        <option value="CNY">CNY</option>
        <option value="CAD">CAD</option>
        <option value="MYR">MYR</option>
        <option value="THB">THB</option>
        <option value="IDR">IDR</option>
      </select>
    </>
  );
}
