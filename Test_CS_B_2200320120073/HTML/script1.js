async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = "bd5d6db1c55613f81c60eed85271139e"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            const weatherDiv = document.getElementById('weather');
            weatherDiv.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
                <p>Min-Temp:${data.main.temp_min}°C</p>
                <p>Max_Temp:${data.main.temp_max}°C</p>
            `;
        } else {
            alert('City not found!');
        }
    } catch (error) {
        console.error('Not able to provide data:', error);
    }
}