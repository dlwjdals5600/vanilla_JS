const API_KEY = "";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:nth-child(1)")
            const temp = document.querySelector("#weather span:nth-child(2)")
            const city = document.querySelector("#weather span:nth-child(3)")
            
            weather.innerText = data.weather[0].main+" / ";
            temp.innerText = data.main.temp+"°C [ ";
            city.innerText = data.name+" ]";

            
    });
}
function onGeoError(){
    alert("당신의 위치를 찾지 못했습니다.[위치 확인 권한을 허용으로 설정해 주세요.] ");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);