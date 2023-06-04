function buttonClickGET() {
    var url = "https://api.openweathermap.org/data/2.5/weather?q=Le%20Pouliguen,fr&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric&lang=fr"

    $.get(url, callBackGetSuccess).done(function() {
        //alert( "second success" );
      })
      .fail(function() {
        alert( "erreur" );
      })
      .always(function() {
        //alert( "finished" );
      });
}

var callBackGetSuccess = function(data) {
    var element = document.getElementById("zone_meteo");
    element.innerHTML = data.main.temp + "°C";
    var imgelement = document.getElementById("img_meteo");
    imgelement.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
    var element = document.getElementById("vitesse_vent");
    element.innerHTML = Math.round((data.wind.speed * 3.6) * 100) / 100 + " km/h";
    // element.innerHTML = data.wind.speed * 3.6 + " km/h"
    var element = document.getElementById("city");
    element.innerHTML = data.name;
}
