const cityForm = document.querySelector('#city-form');
cityForm.addEventListener('submit', (e) => {
    e.preventDefault();
    getWeather(cityForm.city.value);
})


async function getWeather(city) {
    try {
        const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=d3541915ae132f059307c84e9b76cfe4'
        , {mode: 'cors'});
        const weatherData = await response.json();
        
        const temperatureDiv = document.querySelector("#temperature")
        temperatureDiv.textContent = weatherData.main.temp+" °F";
        displayBackground(weatherData.weather[0].main)
    } catch (error) {
        displayBackground('random')
        const temperatureDiv = document.querySelector("#temperature")
        temperatureDiv.textContent = 'Insert a valid city';
    }
}

function displayBackground(weatherState) {
    const html = document.querySelector('html')

    switch (weatherState) {
        case 'Rain':
            html.classList.add('rain')
            html.classList.remove('clouds')
            html.classList.remove('clear')
            html.classList.remove('random')
            break;
    
        case 'Clouds':
            html.classList.add('clouds')
            html.classList.remove('rain')
            html.classList.remove('clear')
            html.classList.remove('random')
            break;
        
        case 'Clear':
            html.classList.add('clear')
            html.classList.remove('clouds')
            html.classList.remove('rain')
            html.classList.remove('random')
            break;

        case 'random':
            html.classList.add('random')
            html.classList.remove('clouds')
            html.classList.remove('rain')
            html.classList.remove('clear')
            break;

        default:
            break;
    }
}