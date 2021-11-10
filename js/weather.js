// strings variable
const API_KEY = "40232206e6bfcfc7b00b1f8dae4714ef";

// geolocation allow fn
function onGeo(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temp = document.querySelector("#weather span:nth-of-type(1)");
      const weather = document.querySelector("#weather span:nth-of-type(2)");
      const city = document.querySelector("#weather span:nth-of-type(3)");
      temp.innerText = data.main.temp;
      weather.innerText = data.weather[0].main;
      city.innerText = data.name;
    });
}

// geolocation err fn
function onGeoErr() {
  alert("현재 위치 정보를 확인 할 수 없습니다.");
}

// geo fn
navigator.geolocation.getCurrentPosition(onGeo, onGeoErr);
