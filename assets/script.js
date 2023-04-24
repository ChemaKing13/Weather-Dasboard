var newName = document.getElementById("cityInput"); 
var searchBtn = document.getElementById("searchBtn");


//this function called getApi will help us to fetch the info from the weather Api and then will set it on our html
function getApi() {
    // var cityName = document.getElementById("cityName"); 

    //this fetch must include our api key and will get the name of the city according to the user input 
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${newName.value}&appid=90e017b27566304547bf7d5543eef480`)
        .then(response => response.json())
        .then(data => {
            //this loop will retrive the information about temperature 
            for (i=0; i<5; i++) {
                //first we get the element by id, each day include an id "day1Temp", this method will get the id by the world day and i++
                //since the retrieved info is shown as an array, we need to asign the parameters we are going to use 
                document.getElementById("day" +(i+1)+"Temp").innerHTML = "Temp:" + Number(data.list[i].main.temp -288.53).toFixed(1) + "°";
            }
            //display the wind speed 
            for (i=0; i<5; i++) {
                document.getElementById("day"+(i+1)+"Wind").innerHTML = "Wind:" + Number(data.list[i].wind.speed).toFixed(1) + "MPH";
            }
            //display the humedity for each day
            for (i=0; i<5; i++) {
                document.getElementById("day" +(i+1)+"Hum").innerHTML = "Humidity:" + Number(data.list[i].main.humidity).toFixed(1) + "%";
            }
            // here we set the weather icon that will be set in our html in png 
            for (i=0; i<5; i++) {
                document.getElementById("img" +(i+1)).src = " https://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png";
            }

            //this loop willl display the date 
            for (i=0; i<5; i++) {
                var date = new Date(data.list[i].dt_txt);
                document.getElementById("day" +(i+1)+"Date").innerHTML = date.toLocaleDateString();
            }

            

        })
        // .catch(err => alert("something went wrong"));
}


//the getApi will start whenever the serachBtn its clicked 
searchBtn.addEventListener("click", getApi); 














