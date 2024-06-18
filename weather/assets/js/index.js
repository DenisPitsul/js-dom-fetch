// ViewModel
const tableContainer = document.querySelector('.table-container');
const maxWindTitle = document.querySelector('.max-wind-title');
const errorMessageEl = document.querySelector('.error-message');

const api = new Api();

loadWeather();

function showWeather(wind_gusts_10m, wind_speeds_10m) {
    const weatherResponse = new WeatherResponse(wind_gusts_10m, wind_speeds_10m);
    const { wheatherWinds, maxWindSpeed10m, maxWindGust10m } = WeatherWinds.castFromWeatherResponse(weatherResponse);

    maxWindTitle.textContent = `Max wind speed: ${maxWindSpeed10m} km/h, Max wind gust: ${maxWindGust10m}km/h`

    tableContainer.innerHTML = `<table>
        <thead>
            <tr>
                <th>Wind speed</th>
                <th>Wind gust</th>
                <th>Befort mark</th>
            </tr>
        </thead>
        <tbody>
            ${wheatherWinds.map(({windGust10m, windSpeed10m, befortMark, color}) => {
                return `<tr>
                        <td>${windSpeed10m}</td>
                        <td>${windGust10m}</td>
                        <td style="background-color: ${color}">${befortMark}</td>
                    </tr>`
            })}
        </tbody>
    </table>`;
}

function showError(message) {
    errorMessageEl.textContent = message;
}

function loadWeather() {
    showLoader();
    api.fetchWeather()
        .then(({hourly: {wind_gusts_10m, wind_speed_10m}}) => {
            showWeather(wind_gusts_10m, wind_speed_10m);
        }).catch(err => {
            showError(err.message);
        }).finally(() => hideLoader());        
}