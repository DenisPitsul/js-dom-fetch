// Model
class Api {

    fetchRandomDogImage() {
        return fetch('https://dog.ceo/api/breeds/image/random')
            .then(respone => respone.json());
    }

    fetchCatFact() {
        return fetch('https://catfact.ninja/fact')
            .then(respone => respone.json());
    }

    fetchWeather() {
        return fetch('https://api.open-meteo.com/v1/forecast?latitude=48.2904&longitude=25.9324&hourly=wind_speed_10m,wind_gusts_10m')
            .then(respone => respone.json());
    }

    fetchCryptoCurrencyRate() {
        return fetch('https://api2.binance.com/api/v3/ticker/24hr')
            .then(respone => respone.json());
    }
}