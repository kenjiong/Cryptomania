export default function Portfolio ({ portfolio, handleDelete }) {
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
      <h3>My Portfolio - ${value(portfolio)}</h3>
      <p>Profit or Loss</p>
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