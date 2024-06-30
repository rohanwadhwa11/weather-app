const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "c6d60535f2fca31995cb7904514114e0";
console.log("hello");
const date = new Date();
let time = date.getDate() + "  "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
console.log(time);
let input = document.querySelector("input");
let btn = document.querySelector("button");
let icon = document.querySelector(".temp-icon");

btn.addEventListener("click",() => {check(input.value)});

input.addEventListener("keypress",(e) => {
    if(e.key == "Enter"){
        check(input.value);
        document.querySelector(".weather-type").innerText = time;
    }
})

async function check(location){
    const response = await fetch(apiUrl+location+`&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);
   if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
   }
   else{
    
    let city = document.querySelector(".city");
    let citys = document.querySelector(".citys");
    let temp = document.querySelector(".temp");
    let temps = document.querySelector(".temps");
    let humidity = document.querySelector(".humidity");
    let wind = document.querySelector(".wind");
    console.log(icon.classList);
   /*  if(data.weather[0].main == "Clear"){
        icon.setAttribute("src","clear.png");
        console.log(icon.getAttribute("src"));
    } */
    switch(data.weather[0].main){
        case "Clear":
            document.querySelector("body").style.background = "url('https://farm3.staticflickr.com/2848/11219783835_2d1405810b_o.jpg')";
                icon.innerHTML =   '<i class="fa-regular fa-sun"></i>';
            break;
        case "Clouds":
            document.querySelector("body").style.background = "url('https://wallpapers.com/images/featured/cloud-abky4hmp3jy2nwwr.jpg')";
            icon.innerHTML = '<i class="fa-solid fa-cloud"></i>';
            break;
        case "Snow":
            document.querySelector("body").style.background = "url('https://images.pexels.com/photos/13012545/pexels-photo-13012545.jpeg')"
            icon.innerHTML = '<i class="fa-regular fa-snowflake"></i>';
            break;
        case "Rain":
            document.querySelector("body").style.background = "url('https://wallpapers.com/images/featured/rain-background-bwsdotr5v2lw9usv.jpg')"
            icon.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`;
            break;
        case "Mist":
            document.querySelector("body").style.background = "url(`https://www.wartsila.com/images/default-source/energy/technology-comparisons/wind_power.tmb-1920x690.jpg?Culture=en&sfvrsn=26160a43_1`)"
            icon.innerHTML = '<i class="fa-solid fa-tornado"></i>';
            break;
        case "Drizzle":
            document.querySelector("body").style.background = "url('https://wallpapercave.com/wp/wp8260479.jpg')"
            icon.innerHTML = '<i class="fa-solid fa-cloud-sun-rain"></i>'
            break;
    }
    document.querySelector("body").style.backgroundSize = "cover";

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    city.innerText = data.name;
    citys.innerText = data.name;
    temp.innerText = Math.round(data.main.temp) + "°C";
    temps.innerText = Math.round(data.main.temp) + "°C";
    humidity.innerText = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + "km/h";
   }
}