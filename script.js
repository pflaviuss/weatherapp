const apikey = `45d2b1974108dfa1128c4ce9991a1f56`;
const city = 'Slobozia';



window.addEventListener('load', ()=>{
    let long;
    let lat;

    
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
            });});
            
            
    } 
    
});

