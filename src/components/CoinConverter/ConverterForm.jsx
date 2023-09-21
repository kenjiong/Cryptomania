import { useState } from "react";

export default function ConverterForm({ coins }) {
  const [selectFirst, setSelectFirst] = useState(1);
  const [selectSecond, setSelectSecond] = useState(1);
  const [firstCoin, setFirstCoin] = useState("");
  const [secondCoin, setSecondCoin] = useState("");
  const [convertValue, setConvertValue] = useState(0);
  const [show, setShow] = useState(false);

  const handleConvert = () => {
    const index1 = selectFirst - 1;
    setFirstCoin(coins[index1].name);

    const index2 = selectSecond - 1;
    setSecondCoin(coins[index2].name);

    const sum = coins[index1]?.price / coins[index2]?.price;
    setConvertValue(sum);
    setShow(true);
  };

  return (
    <>
      <div className="row">
      <div className="col">
      <label>
        Coin 1:
        <select className="form-select" value={selectFirst} onChange={event => setSelectFirst(event.target.value)}>
          {coins.map((coin1) => (
            <option key={coin1.id} value={coin1.rank}>
              {coin1.symbol}
            </option>
          ))}
        </select>
      </label>
      </div>
      <div className="col">
      <label>
        Coin 2:
        <select className="form-select" value={selectSecond} onChange={event => setSelectSecond(event.target.value)}>
          {coins.map((coin2) => (
            <option key={coin2.id} value={coin2.rank}>
              {coin2.symbol}
            </option>
          ))}
        </select>
      </label>
      </div>
      </div>
      <button type="button" className="btn btn-primary" onClick={() => handleConvert()}>Convert</button>
      <br />
      <br />
      <div className="row">
      {show && (
        <h4 className="text-warning">
          1 {firstCoin} converts to {convertValue} {secondCoin}
        </h4>
      )}
      </div>
    </>
  );
}
