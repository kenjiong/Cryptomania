import { useState } from "react";
import StockCard from "./StockCard";

export default function PortfolioContainer({ portfolio, handleSell }) {
  const value = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i].price;
    }
    const fixedSum = sum.toFixed(2);
    return fixedSum;
  };

  return (
    <div>
      <h2>My Portfolio - ${value(portfolio)}</h2>
      {portfolio.map((stock) => (
        <StockCard
          key={stock.id}
          stock={stock}
          isInPortfolio={true}
          handleSell={handleSell}
        />
      ))}
    </div>
  );
}