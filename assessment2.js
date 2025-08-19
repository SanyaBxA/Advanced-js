function getWeather(callback){
    const lat=13.0827;
    const long=80.2707;

    const url= `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true`;

    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        callback(null, data.current_weather);
    })
    .catch(error=>{
        callback(error);
    });


}

getWeather(function(err,weather){
    if(err){
        console.log("failed to fetch the weather.");
        return;
    }

    console.log("temperature:", weather.temperature + "°C");
    console.log("wind speed:" + weather.windspeed + "km/hr");
    console.log("wind direction:" + weather.winddirection + "°");
    console.log("time:" + weather.time);
})
