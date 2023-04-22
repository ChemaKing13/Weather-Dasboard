var apiKey = "90e017b27566304547bf7d5543eef480"; 
var newName = document.getElementById("cityInput"); 
var searchBtn = document.getElementById("searchBtn");

function getInfo() {
    var cityName = document.getElementById("cityName"); 

    cityName.innerHTML = "--" + newName.value + "--" 

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${newName.value}&appid=90e017b27566304547bf7d5543eef480`)
        .then(response => response.json())
        .then(data => {
            for (i=0; i<5; i++) {
                document.getElementById("day" +(i+1)+"Temp").innerHTML = "Temp:" + Number(data.list[i].main.temp -288.53).toFixed(1) + "°";
            }

            for (i=0; i<5; i++) {
                document.getElementById("day"+(i+1)+"Wind").innerHTML = "Wind:" + Number(data.list[i].wind.speed).toFixed(1) + "MPH";
            }
            
            for (i=0; i<5; i++) {
                document.getElementById("day" +(i+1)+"Hum").innerHTML = "Humidity:" + Number(data.list[i].main.humidity).toFixed(1) + "%";
            }

            for (i=0; i<5; i++) {
                document.getElementById("img" +(i+1)).src = " https://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png";
            }

        })
        // .catch(err => alert("something went wrong"));
}






searchBtn.addEventListener("click", getInfo); 