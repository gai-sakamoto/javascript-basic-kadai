// const API_KEY = '';
const city = 'Tokyo';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ja`;

// DOM要素の参照
const weatherDataElements = document.querySelectorAll('.weather-data div:nth-of-type(2n)');
const [weatherDesc, weatherIcon, temperature, windSpeed] = weatherDataElements;

// 天気情報を取得して更新
fetch(url)
    .then(response => response.json())
    .then(data => {
        // 天気の説明
        weatherDesc.textContent = data.weather[0].description;

        // 天気アイコン
        const iconCode = data.weather[0].icon;
        weatherIcon.querySelector('img').src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        // 気温
        temperature.textContent = `${data.main.temp.toFixed(1)}℃`;

        // 風速
        windSpeed.textContent = `${data.wind.speed.toFixed(1)} (m/s)`;
    })
    .catch(error => {
        console.error('天気情報の取得に失敗:', error);
        
        // エラー時のデフォルト表示
        weatherDesc.textContent = '情報取得エラー';
        temperature.textContent = '---';
        windSpeed.textContent = '---';
    });