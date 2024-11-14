let key='8bfba8c532696c2f09902a443c95d993';
let city_name="Delhi";
let geocoding=`http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&appid=${key}`
function getWeather(data){
    let lat=data.lat
    let lon=data.lon
    let weatherapi=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
    fetch(weatherapi)
    .then(data=>data.json())
    .then(data=>{
        console.log(data);
    })
}
fetch(geocoding)
.then(data=>data.json())
.then(data=>{
    console.log(data[0].lat,data[0].lon);
    return{
        "lat":data[0].lat,
        "lon":data[0].lon
    }
})
.then(getWeather)
.catch(err=>{
    console.log(err);
})