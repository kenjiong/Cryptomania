import { useState } from "react";

export default function ConverterForm({ coins }) {
const [firstCoin, setFirstCoin] = useState("");
const [secondCoin, setSecondCoin] = useState("");
const [firstCoinValue, setFirstCoinValue] = useState(0);
const [secondCoinValue, setSecondCoinValue] = useState(0);
const [convertValue, setConvertValue] = useState(0);
const [show, setShow] = useState(false);

const handleCoin1Change = (event) => {
  const index = event.target.value - 1;
  setFirstCoin(coins[index].name);
  setFirstCoinValue(coins[index].price);
  setShow(false);
}

const handleCoin2Change = (event) => {
  const index = event.target.value - 1;
  setSecondCoin(coins[index].name);
  setSecondCoinValue(coins[index].price);
  setShow(false);
}

const handleConvert = () => {
const sum = firstCoinValue / secondCoinValue;
setConvertValue(sum);
setShow(true);
}

  return (
    <>
    <label>
      Coin 1:
<select onChange = {handleCoin1Change}>
  {coins.map((coin1) =>
  <option key={coin1.id} value={coin1.rank}>{coin1.symbol}</option>)}
</select>
</label>
<label>
      Coin 2:
<select onChange = {handleCoin2Change}>
  {coins.map((coin2) =>
  <option key={coin2.id} value={coin2.rank}>{coin2.symbol}</option>)}
</select>
</label>
<button onClick={() => handleConvert()}>Convert</button>
<br />
{show && <p>1 {firstCoin} converts to {convertValue} {secondCoin}</p>}
    </>
  );
}