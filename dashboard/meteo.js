function buttonClickGET() {
    var url = "https://api.openweathermap.org/data/2.5/weather?q=Le Pouliguen,fr&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric"

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
    var element = document.getElementById("zone_meteo");
    element.innerHTML = "La temperature de " + data.name + " est de " + data.main.temp;
    var imgelement = document.getElementById("img_meteo");
    imgelement.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
}

