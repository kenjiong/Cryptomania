import { useState } from "react";

export default function ConverterForm({ coins }) {
const [firstCoin, setFirstCoin] = useState("");
const [secondCoin, setSecondCoin] = useState("");
const [firstCoinValue, setFirstCoinValue] = useState(0);
const [secondCoinValue, setSecondCoinValue] = useState(0);
const [convertValue, setConvertValue] = useState(0);

const handleCoin1Change = (event) => {
  let index = event.target.value - 1;
  setFirstCoin(coins[index].name);
  setFirstCoinValue(coins[index].price);
}

const handleCoin2Change = (event) => {
  let index = event.target.value - 1;
  setSecondCoin(coins[index].name);
  setSecondCoinValue(coins[index].price);
}

const handleConvert = () => {
const sum = firstCoinValue / secondCoinValue;
setConvertValue(sum);
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
1 {firstCoin} converts to {convertValue} {secondCoin}
    </>
  );
}