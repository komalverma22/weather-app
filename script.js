console.log("heyy");
const weatherkey = "a469f5cae7081d91e61adfe174ac8f26";

const weatherData = document.getElementById("weather-data");
const input = document.getElementById("city");

const formE1 = document.querySelector("form");

formE1.addEventListener("submit", (event) => {
    event.preventDefault(); //isme reload nhi hoga automatically
    const inputt = input.value;
    console.log(inputt);
    getWeather(inputt);
})

async function getWeather(cityValue) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${weatherkey}&units=metric`);
        // check
        if(!response.ok){
            throw new Error("Network response was not ok");
        }

        const data=await response.json();
        console.log(data);
        const temp=Math.round(data.main.temp);
        const weatherr=data.weather[0].description.toUpperCase();
        const humidity=Math.round(data.main.humidity);
        const feelsLike=Math.round(data.main.
            feels_like);
        const speedd=data.wind.speed;
        const iconn = data.weather[0].icon;
            
        const tempp=document.querySelector(".temperature");
        tempp.innerHTML=`${temp}℃`;

        const climate=document.querySelector(".description");
        climate.innerHTML=`${weatherr}`;
        // climate.style.transitionTransform="uppercase()";

        const humi=document.querySelector(".humidity");
        humi.innerHTML=`Humidity: ${humidity}% `;

        const feelsE1=document.querySelector(".feels");
        feelsE1.innerHTML=`Feels like: ${feelsLike}°C`;

        const speedE1=document.querySelector(".speed");
        speedE1.innerHTML=`Wind speed: ${speedd} m/s`;

        const imageE1=document.querySelector(".icon img");
        imageE1.src=`http://openweathermap.org/img/wn/${iconn}.png`;
        imageE1.alt = "weather-photo";
        console.log(imageE1);
        

    } catch (error) {
        const tempp=document.querySelector(".temperature");
        tempp.innerHTML="";

        const climate=document.querySelector(".description");
        climate.innerHTML="An error happened,please try again!";
        // climate.style.transitionTransform="uppercase()";

        const humi=document.querySelector(".humidity");
        humi.innerHTML="";

        const feelsE1=document.querySelector(".feels");
        feelsE1.innerHTML="";

        const speedE1=document.querySelector(".speed");
        speedE1.innerHTML="";

        const imageE1=document.querySelector(".icon img");
        imageE1.src="";
        imageE1.alt = "";
    }
}
