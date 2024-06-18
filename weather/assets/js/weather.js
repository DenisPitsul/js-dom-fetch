// Model
class WeatherResponse {
    constructor(windGusts10m, windSpeeds10m) {
        this.windGusts10m = windGusts10m;
        this.windSpeeds10m = windSpeeds10m;
    }

    getMaxWindGust10m() {
        return Math.max(...this.windGusts10m);
    }

    getMaxWindSpeed10m() {
        return Math.max(...this.windSpeeds10m);
    }
}

class WeatherWind {
    constructor(windGust10m, windSpeed10m) {
        this.windGust10m = windGust10m;
        this.windSpeed10m = windSpeed10m;
        this.calcBefortMark(windSpeed10m);
    }

    calcBefortMark(windSpeed10m) {
        if (windSpeed10m < 1.1) {
            this.befortMark = 0;
            this.color = '#ffffff';
        } else if(windSpeed10m >= 1.1 && windSpeed10m < 6) {
            this.befortMark = 1;
            this.color = '#aef1f9';
        } else if(windSpeed10m >= 6 && windSpeed10m < 12) {
            this.befortMark = 2;
            this.color = '#96f7dc';
        } else if(windSpeed10m >= 12 && windSpeed10m < 20) {
            this.befortMark = 3;
            this.color = '#96f7b4';
        } else if(windSpeed10m >= 20 && windSpeed10m < 29) {
            this.befortMark = 4;
            this.color = '#6ff46f';
        } else if(windSpeed10m >= 29 && windSpeed10m < 39) {
            this.befortMark = 5;
            this.color = '#73ed12';
        } else if(windSpeed10m >= 39 && windSpeed10m < 50) {
            this.befortMark = 6;
            this.color = '#a4ed12';
        } else if(windSpeed10m >= 50 && windSpeed10m < 62) {
            this.befortMark = 7
            this.color = '#daed12';
        } else if(windSpeed10m >= 62 && windSpeed10m < 75) {
            this.befortMark = 8;
            this.color = '#edc212';
        } else if(windSpeed10m >= 75 && windSpeed10m < 89) {
            this.befortMark = 9
            this.color = '#ed8f12';
        } else if(windSpeed10m >= 89 && windSpeed10m < 103) {
            this.befortMark = 10;
            this.color = '#ed6312';
        } else if(windSpeed10m >= 103 && windSpeed10m < 118) {
            this.befortMark = 11;
            this.color = '#ed2912';
        } else {
            this.befortMark = 12;
            this.color = '#d5102d';
        }
    }

    calcColor() {
        if (this.windSpeed10m < 1.1) {
            return 0;
        } else if(this.windSpeed10m >= 1.1 && this.windSpeed10m < 6) {
            return 1;
        } else if(this.windSpeed10m >= 6 && this.windSpeed10m < 12) {
            return 2;
        } else if(this.windSpeed10m >= 12 && this.windSpeed10m < 20) {
            return 3;
        } else if(this.windSpeed10m >= 20 && this.windSpeed10m < 29) {
            return 4;
        } else if(this.windSpeed10m >= 29 && this.windSpeed10m < 39) {
            return 5;
        } else if(this.windSpeed10m >= 39 && this.windSpeed10m < 50) {
            return 6;
        } else if(this.windSpeed10m >= 50 && this.windSpeed10m < 62) {
            return 7;
        } else if(this.windSpeed10m >= 62 && this.windSpeed10m < 75) {
            return 8;
        } else if(this.windSpeed10m >= 75 && this.windSpeed10m < 89) {
            return 9;
        } else if(this.windSpeed10m >= 89 && this.windSpeed10m < 103) {
            return 10;
        } else if(this.windSpeed10m >= 103 && this.windSpeed10m < 118) {
            return 11;
        } else {
            return 12;
        }
    }
}

class WeatherWinds {
    constructor(wheatherWinds, maxWindGust10m, maxWindSpeed10m) {
        this.wheatherWinds = wheatherWinds;
        this.maxWindGust10m = maxWindGust10m;
        this.maxWindSpeed10m = maxWindSpeed10m;
    }

    static castFromWeatherResponse(weatherResponse) {
        const weatherWinds = [];
        weatherResponse.windGusts10m.forEach((windGust, index) => {
            const weatherWind = new WeatherWind(windGust, weatherResponse.windSpeeds10m[index]);
            weatherWinds.push(weatherWind);
        });

        const weatherWindsObj = new WeatherWinds(weatherWinds, 
            weatherResponse.getMaxWindGust10m(), weatherResponse.getMaxWindSpeed10m());

        return weatherWindsObj;
    }
}


