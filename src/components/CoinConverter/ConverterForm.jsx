import { useState } from "react";

export default function ConverterForm({ coins }) {
  const [selectFirst, setSelectFirst] = useState(coins[0]);
  const [selectSecond, setSelectSecond] = useState(coins[0]);
  const [firstCoin, setFirstCoin] = useState("");
  const [secondCoin, setSecondCoin] = useState("");
  const [firstCoinValue, setFirstCoinValue] = useState(0);
  const [secondCoinValue, setSecondCoinValue] = useState(0);
  const [convertValue, setConvertValue] = useState(0);
  const [show, setShow] = useState(false);

  const handleConvert = () => {
    setFirstCoin(selectFirst?.name);

    setSecondCoin(selectSecond?.name);

    const sum = select / secondCoinValue;
    setConvertValue(sum);
    setShow(true);
  };

  return (
    <>
      <label>
        Coin 1:
        <select value={selectFirst} onChange={event => setSelectFirst(event.target.value)}>
          {coins.map((coin1) => (
            <option key={coin1.id} value={coin1}>
              {coin1.symbol}
            </option>
          ))}
        </select>
      </label>
      <label>
        Coin 2:
        <select value={selectSecond} onChange={event => setSelectSecond(event.target.value)}>
          {coins.map((coin2) => (
            <option key={coin2.id} value={coin2}>
              {coin2.symbol}
            </option>
          ))}
        </select>
      </label>
      <button onClick={() => handleConvert()}>Convert</button>
      <br />
      {show && (
        <p>
          1 {firstCoin} converts to {convertValue} {secondCoin}
        </p>
      )}
    </>
  );
}
