export default function Watchlist ({ watchlist, handleDelete }) {
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
        <h3>My Watchlist</h3>
        {watchlist.map((coin) => (
          <div key={coin.id}>
            {coin.id} {coin.price.toFixed(2)}
            <DeleteCoin handleDelete={handleDelete}/>
          </div>
          
        ))}
      </div>
    );
  }