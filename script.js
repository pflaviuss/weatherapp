const apikey = `45d2b1974108dfa1128c4ce9991a1f56`;
let city = 'Bratislava';
let search = document.querySelector('[data-search]');
let button = document.querySelector('.btn');


 
window.addEventListener('load', ()=>{
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let icon = document.querySelector('.icon');
    search = function(){
        this.api(document.querySelector(".search-bar").value);
    }
    

    // let weather = {
    //     apikey:`45d2b1974108dfa1128c4ce9991a1f56`,
    //     fetchWeather: function(city){
    //         fetch(
    //             `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apikey}&units=metric`
    //         )
    //         .then((response) => response.json())
    //         .then((data) => this.displayWeather(data));
    //     },
    //     displayWeather: function(data){
    //         const {name} = data;
    //         const {icon, description} = data.weather[0];
    //         const {temp, humidity} = data.main;
    //         const { speed} = data.wind;
    //         console.log(name, icon, description, temp, humidity, speed);
    //     }
    // }

   

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            // what i've done here takes your coordinates and puts them to the variables mentioned
            
            const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apikey}&units=metric`;
            fetch(api)
            .then(response => {
                return response.json();//
            })
            .then(data =>{
                console.log(data);

                const {temp} = data.main;
                const {main} = data.weather[0];
                const {country} = data.sys;
                // document.querySelector(".chosen-location").innerText = city;
                
                let searchBar = document.querySelector(".searchbar");        
                let button = document.querySelector(".btn");
                let chosenLocation = document.querySelector(".chosen-location");
                button.addEventListener("click", () =>{
                    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchBar.value}&APPID=${apikey}&units=metric`)
                    .then((res) =>{
                    return res.json()})
                    .then(data =>{                  /// I AM CURRENTLY GENERATING THE DATA BUT CAN'T GET THE VALUES USING DOM MANIPULATION
                        console.log(data)
                    })
                    .then((data)=>
                    (chosenLocation.textContent = data.name))
                    .then((data)=>
                    (locationTimezone.textContent = data.country));
                    console.log(err.res.data)
                    
                });
                // searchBar.value = city;
                


                // function submit() {
                //     document.querySelector(".btn").addEventListener("click", function (){
                //         search.TextContent = 
                //         submit.search.textContent;
                //         fetch(api);}
                //         )
                // }
               
                // set DOM elements from the API

                temperatureDegree.textContent = temp;
                temperatureDescription.textContent = main;
                locationTimezone.textContent = country;

                if(temperatureDescription.textContent === 'Mist'){
                    document.querySelector('.icon').src='http://openweathermap.org/img/wn/50d@2x.png';
                }if(temperatureDescription.textContent === 'Clear Sky'){
                    document.querySelector('.icon').src='http://openweathermap.org/img/wn/01d@2x.png';
                }if(temperatureDescription.textContent === 'Clouds'){
                    document.querySelector('.icon').src='http://openweathermap.org/img/wn/03d@2x.png';
                }if(temperatureDescription.textContent === 'Rain'){
                    document.querySelector('.icon').src='http://openweathermap.org/img/wn/10d@2x.png';
                }if(temperatureDescription.textContent === 'Thunderstorm'){
                    document.querySelector('.icon').src='http://openweathermap.org/img/wn/11d@2x.png';
                }if(temperatureDescription.textContent === 'Snow'){
                    document.querySelector('.icon').src='http://openweathermap.org/img/wn/13d@2x.png';
                }if(temperatureDescription.textContent === 'Fog'){
                    document.querySelector('.icon').src='http://openweathermap.org/img/wn/50d@2x.png';
                }
               
               console.log(temperatureDescription.textContent);
        
            });});
            
            
    } 
    
});

