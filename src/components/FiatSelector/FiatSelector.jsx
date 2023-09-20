export default function FiatSelector({ changeFiat }) {
  const handleFiatChange = (event) => {
    changeFiat(event.target.value);
  }

  return (
    <>
      <select onChange={handleFiatChange}>
        <option className="dropdown-item" value="USD">USD</option>
        <option className="dropdown-item" value="EUR">EUR</option>
        <option className="dropdown-item"value="GBP">GBP</option>
        <option className="dropdown-item" value="SGD">SGD</option>
        <option className="dropdown-item" value="AUD">AUD</option>
        <option className="dropdown-item" value="HKD">HKD</option>
        <option className="dropdown-item" value="JPY">JPY</option>
        <option className="dropdown-item" value="CNY">CNY</option>
        <option className="dropdown-item" value="CAD">CAD</option>
        <option className="dropdown-item" value="MYR">MYR</option>
        <option className="dropdown-item" value="THB">THB</option>
        <option className="dropdown-item" value="IDR">IDR</option>
      </select>
    </>
  );
}
