import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Components/Card";
function App() {
      const [coins, setCoins] = useState([]);
      const [search, setSearch] = useState("");
      // declare the data fetching function
      useEffect(() => {
            async function fetchData() {
                  await axios
                        .get(
                              "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false"
                        )
                        .then(res => {
                              setCoins(res.data);
                              console.log(res.data);
                        })
                        .catch(error => console.log(error));
            }
            fetchData();
      }, []);
      const filteredCoins = coins.filter(coin =>
            coin.name.toLowerCase().includes(search.toLowerCase())
      );
      // call the function

      // make sure to catch any error

      return (
            <div className="App container">
                  <div class="ui my-2 w-100 icon input">
                        <input
                              value={search}
                              onChange={e => setSearch(e.target.value)}
                              type="text"
                              placeholder="Search..."
                        />
                        <i aria-hidden="true" class="search icon"></i>
                  </div>

                  {coins !== undefined
                        ? filteredCoins.map(item => <Card item={item} />)
                        : ""}
            </div>
      );
}

export default App;
