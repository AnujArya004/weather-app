const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")
// const API = `https://api.openweathermap.org/data/2.5/weather?
// q=${city}&appid=${API_KEY}&units=metric`
// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

const showWeather = (data) => {
    if (data.code == "404") {
        weather.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
    weather.innerHTML = `
            <div>
                <img src="${data.current.weather_icons}" alt="">
            </div>
            <div>
                <h2>${data.current.temperature} ℃</h2>
            </div>
        `
}
const getWeather = async (city) => {
    weather.innerHTML = `<h2> Loading... <h2>`
    const url = `http://api.weatherstack.com/current?access_key=cf00d47aff2e7c53287a709588f9abeb&query=${city}`;
    const response = await fetch(url);
    const data = await response.json()
    showWeather(data)
}

form.addEventListener(
    "submit",
    function (event) {
        getWeather(search.value)
        event.preventDefault();
    }
)
