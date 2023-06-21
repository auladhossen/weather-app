const API_KEY = `b800d1fa615f93dcdd5d1b60a5898c46`;

const getWeatherData = (location) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => alert('Failed to fetch weather data for this location', error));
        location = '';
}

const setCityName = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayWeather = weather => {
    setCityName('city', `Location - ${weather.name}`);
    setCityName('humidity', `Humidity - ${weather.main.humidity}`);
    setCityName('temperature', `Temperature - ${weather.main.temp}\u00B0C`);
    setCityName('description', `Description - ${weather.weather[0].description}`);

    let url = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    let imageIcon = document.getElementById('weather-icon');
    imageIcon.setAttribute('src', url);
}

getWeatherData('Dhaka');
