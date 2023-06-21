const API_KEY = `b800d1fa615f93dcdd5d1b60a5898c46`;

const getWeatherData = (location = 'Dhaka') => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayTemperature(data))
        .catch(error => alert('Error getting geolocation', error));
        location = '';
}


const setCityName = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    setCityName('city', `Location - ${temperature.name}`);
    setCityName('humidity', `Humidity - ${temperature.main.humidity}`);
    setCityName('temperature', `Temperature - ${temperature.main.temp}`);
    setCityName('description', `Description - ${temperature.weather[0].description}`);    

    let url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    let imageIcon = document.getElementById('weather-icon');
    imageIcon.setAttribute('src', url);
}


const getCurrentLocationWeather = () => {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

            fetch(url)
                .then(response => response.json())
                .then(data => displayTemperature(data))
                .catch(error => console.log('Error:', error));
        }, error => {
            alert('Error getting geolocation:', error);
            getWeatherData();
        });
    } else {
        console.log('Geolocation is not supported by your browser');
        getWeatherData();
    }
};

getCurrentLocationWeather();