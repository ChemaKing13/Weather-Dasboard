var newName = document.getElementById("cityInput"); 
var searchBtn = document.getElementById("searchBtn");


//this function called getApi will help us to fetch the info from the weather Api and then will set it on our html
function getApi() {
    var cityName = document.getElementById("cityName"); 

    cityName.innerHTML = "--" + newName.value + "--" 

    //this fetch must include our api key and will get the name of the city according to the user input 
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${newName.value}&appid=90e017b27566304547bf7d5543eef480`)
        .then(response => response.json())
        .then(data => {
            //this loop will retrive the information about temperature 
            for (i=0; i<5; i++) {
                document.getElementById("day" +(i+1)+"Temp").innerHTML = "Temp:" + Number(data.list[i].main.temp -288.53).toFixed(1) + "°";
            }
            //wind speed 
            for (i=0; i<5; i++) {
                document.getElementById("day"+(i+1)+"Wind").innerHTML = "Wind:" + Number(data.list[i].wind.speed).toFixed(1) + "MPH";
            }
            //humedity 
            for (i=0; i<5; i++) {
                document.getElementById("day" +(i+1)+"Hum").innerHTML = "Humidity:" + Number(data.list[i].main.humidity).toFixed(1) + "%";
            }
            // here we set the weather icon that will be set in our html in png 
            for (i=0; i<5; i++) {
                document.getElementById("img" +(i+1)).src = " https://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png";
            }

            

        })
        // .catch(err => alert("something went wrong"));
}


//the getApi will start whenever the serachBtn its clicked 
searchBtn.addEventListener("click", getApi); 














