const cities=[
    {name: "Mumbai", lat: 19.0760, long: 72.8777},
    {name: "Chennai", lat: 13.0827, long: 80.270},
    {name: "Bangalore", lat:12.9716, long: 77.5946}
];

function getWeather(city){

    const url= `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.long}&current_weather=true`;

    return fetch(url)
    .then(response => response.json())
    .then(data=>{
        return{
        name: city.name,
        temperature: data.current_weather.temperature,
        windspeed: data.current_weather.windspeed,
        weathercode: data.current_weather.weathercode,
        time: data.current_weather.time
        };
    });
}

Promise.all(cities.map(getWeather))
.then(res=>{
    console.log("weather in 3 cities:");

    res.forEach(weather=>{

    console.log(`${weather.name}`);
    console.log(`temperature: ${weather.temperature}°C`);
    console.log(`wind speed: ${weather.windspeed} km/hr`);
    console.log(`time: ${weather.time}`);
    });
})
.catch(error=>{
    console.error("failed to get weather.")
});
