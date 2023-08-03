function buttonClickGETV2() {
    var url = "https://api.open-meteo.com/v1/forecast?latitude=47.271263&longitude=-2.425006&hourly=rain,visibility&current_weather=true&timezone=auto&forecast_days=1"

    $.get(url, callBackGetSuccess).done(function() {
        //alert( "second success" );
      })
      .fail(function() {
        alert( "error" );
      })
      .always(function() {
        //alert( "finished" );
      });
}

var callBackGetSuccess = function(data) {
    var element = document.getElementById("temperature");
    element.innerHTML = data.current_weather.temperature + "°C";
    var element = document.getElementById("wind_speed");
    element.innerHTML = data.current_weather.windspeed + " km/h";
}