const apikey = `45d2b1974108dfa1128c4ce9991a1f56`;
const city = 'london';



window.addEventListener('load', ()=>{
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.degree');
    let locationTimezone = document.querySelector('.location-timezone')
    
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
                

                // set DOM elements from the API

                temperatureDegree.textContent = temp;
                temperatureDescription.textContent = main;
                locationTimezone.textContent = country;
                // figure out items
               
            });});
            
            
    } 
    
});

