// ViewModel
const tableContainer = document.querySelector('.table-container');
const errorMessageEl = document.querySelector('.error-message');

const api = new Api();

loadCyptoCurrencyRate();

function showCyptoCurrencyRate(cryptoCurrencyRateArray) {
    tableContainer.innerHTML = `<table>
        <thead>
            <tr>
                <th>Ask price</th>
                <th>Bid price</th>
                <th>Bid qty</th>
                <th>Close time</th>
                <th>Count</th>
                <th>First id</th>
                <th>High price</th>
                <th>Last id</th>
                <th>Last price</th>
                <th>Last qty</th>
                <th>Low price</th>
                <th>Open price</th>
                <th>Open time</th>
                <th>Prev close price</th>
                <th>Price change</th>
                <th>Price change percent</th>
                <th>Symbol</th>
                <th>Volume</th>
                <th>Weighted avg price</th>
            </tr>
        </thead>
        <tbody>
            ${cryptoCurrencyRateArray.map(({
                askPrice,
                bidPrice,
                bidQty,
                closeTime,
                count,
                firstId,
                highPrice,
                lastId,
                lastPrice,
                lastQty,
                lowPrice,
                openPrice,
                openTime,
                prevClosePrice,
                priceChange,
                priceChangePercent,
                symbol,
                volume, 
                weightedAvgPrice
            }) => {
                return `<tr>
                        <td>${askPrice}</td>
                        <td>${bidPrice}</td>
                        <td>${bidQty}</td>
                        <td>${closeTime}</td>
                        <td>${count}</td>
                        <td>${firstId}</td>
                        <td>${highPrice}</td>
                        <td>${lastId}</td>
                        <td>${lastPrice}</td>
                        <td>${lastQty}</td>
                        <td>${lowPrice}</td>
                        <td>${openPrice}</td>
                        <td>${openTime}</td>
                        <td>${prevClosePrice}</td>
                        <td>${priceChange}</td>
                        <td>${priceChangePercent}</td>
                        <td>${symbol}</td>
                        <td>${volume}</td>
                        <td>${weightedAvgPrice}</td>
                    </tr>`
            })}
        </tbody>
    </table>`;
}

function showError(message) {
    errorMessageEl.textContent = message;
}

function loadCyptoCurrencyRate() {
    showLoader();
    api.fetchCryptoCurrencyRate()
        .then((cryptoCurrencyRateArray) => {
            console.log(cryptoCurrencyRateArray);
            showCyptoCurrencyRate(cryptoCurrencyRateArray);
        }).catch(err => {
            showError(err.message);
        }).finally(() => hideLoader());        
}