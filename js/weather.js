const API = "3780bfb8052fc41beaeff6918d9837f3";


function geoOK(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(lat, lng)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather p:last-child");
        const city = document.querySelector("#weather p:first-child");
        const temp = document.querySelector("#weather p:nth-child(2)");
        city.innerText = data.name;
        temp.innerText = `${Math.round(data.main.temp * 10) / 10}°`
        weather.innerText = `${data.weather[0].main}`;
    })
}
function geoERROR() {
    alert("Can't find you. No Weather for you.");
}

navigator.geolocation.getCurrentPosition(geoOK, geoERROR);