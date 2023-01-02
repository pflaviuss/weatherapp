const apikey = `45d2b1974108dfa1128c4ce9991a1f56`;
let city = 'Constanta';
// let search = document.querySelector('.searchbar') must figure out how the search is gonna work 



window.addEventListener('load', ()=>{
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let icon = document.querySelector('.icon');
    // const tempdata = await apirequests.relevantData;
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            // what i've done here takes your coordinates and puts them to the variables mentioned

            const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apikey}&units=metric`;
            fetch(api)
            .then(respones => {
                return respones.json();
            })
            .then(data =>{
                console.log(data);

                const {temp} = data.main;
                const {main} = data.weather[0];
                const {country} = data.sys;
                // search.e('input') HAVE TO FIGURE OUT HOW THE SEARCH IS GONNA WORK 
                // city.textContent = search.textContent;

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
                }
               
               console.log(temperatureDescription.textContent);
        
            });});
            
            
    } 
    
});

