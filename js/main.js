$(document).ready(function () { 
    
    

    if ("geolocation" in navigator){           
        navigator.geolocation.getCurrentPosition(function(position){
             loadWeather(position.coords.latitude + ',' + position.coords.longitude);
        })
    }

    $("#C").click(function(){
        changeUnits("C");
    })

   $("#F").click(function(){
        changeUnits("F");
    })

    function changeUnits(unit) {
        var htmlString = "";
        switch (unit) {
            case "F":
                htmlString = '<i class = "icon-' + globalWeather.code + '"></i>' + " " + globalWeather.temp + ' &deg'
                 + globalWeather.units.temp.toUpperCase();

                 htmlForecast1 = globalWeather.forecast[1].day + "<br>" + '<i class = "forecast-icon icon-' + globalWeather.code + '"></i>' + "<br>"
                + "High " + globalWeather.forecast[1].high + "&deg "+ globalWeather.units.temp + "<br>" + "Low " + globalWeather.forecast[1].low + 
                "&deg "+ globalWeather.units.temp.toUpperCase() + "<br>" + globalWeather.forecast[1].text;

                htmlForecast2 = globalWeather.forecast[2].day + "<br>" + '<i class = "forecast-icon icon-' + globalWeather.code + '"></i>' + "<br>"
                + "High " + globalWeather.forecast[2].high + "&deg "+ globalWeather.units.temp + "<br>" + "Low " + globalWeather.forecast[2].low + 
                "&deg "+ globalWeather.units.temp.toUpperCase() + "<br>" + globalWeather.forecast[2].text;
                
                htmlForecast3 = globalWeather.forecast[3].day + "<br>" + '<i class = "forecast-icon icon-' + globalWeather.code + '"></i>' + "<br>"
                + "High " + globalWeather.forecast[3].high + "&deg "+ globalWeather.units.temp + "<br>" + "Low " + globalWeather.forecast[3].low + 
                "&deg "+ globalWeather.units.temp.toUpperCase() + "<br>" + globalWeather.forecast[3].text;
                
                htmlForecast4 = globalWeather.forecast[4].day + "<br>" + '<i class = "forecast-icon icon-' + globalWeather.code + '"></i>' + "<br>"
                + "High " + globalWeather.forecast[4].high + "&deg "+ globalWeather.units.temp + "<br>" + "Low " + globalWeather.forecast[4].low + 
                "&deg "+ globalWeather.units.temp.toUpperCase() + "<br>" + globalWeather.forecast[4].text;
                
                break;

            case "C":

                htmlString = '<i class = "icon-' + globalWeather.code + '"></i>' + " " + globalWeather.alt.temp + ' &deg'
                 + globalWeather.alt.unit.toUpperCase();

                 htmlForecast1 = globalWeather.forecast[1].day + "<br>" + '<i class = "forecast-icon icon-' + globalWeather.code + '"></i>' + "<br>"
                + "High " + globalWeather.forecast[1].alt.high + "&deg "+ globalWeather.alt.unit.toUpperCase() + "<br>" + "Low " + globalWeather.forecast[1].alt.low + 
                "&deg "+ globalWeather.alt.unit.toUpperCase() + "<br>" + globalWeather.forecast[1].text;
                
                htmlForecast2 = globalWeather.forecast[2].day + "<br>" + '<i class = "forecast-icon icon-' + globalWeather.code + '"></i>' + "<br>"
                + "High " + globalWeather.forecast[2].alt.high + "&deg "+ globalWeather.alt.unit.toUpperCase() + "<br>" + "Low " + globalWeather.forecast[2].alt.low + 
                "&deg "+ globalWeather.alt.unit.toUpperCase() + "<br>" + globalWeather.forecast[2].text;
                
                htmlForecast3 = globalWeather.forecast[3].day + "<br>" + '<i class = "forecast-icon icon-' + globalWeather.code + '"></i>' + "<br>"
                + "High " + globalWeather.forecast[3].alt.high + "&deg "+ globalWeather.alt.unit.toUpperCase() + "<br>" + "Low " + globalWeather.forecast[3].alt.low + 
                "&deg "+ globalWeather.alt.unit.toUpperCase() + "<br>" + globalWeather.forecast[3].text;
                
                htmlForecast4 = globalWeather.forecast[4].day + "<br>" + '<i class = "forecast-icon icon-' + globalWeather.code + '"></i>' + "<br>"
                + "High " + globalWeather.forecast[4].alt.high + "&deg "+ globalWeather.alt.unit.toUpperCase() + "<br>" + "Low " + globalWeather.forecast[4].alt.low + 
                "&deg "+ globalWeather.alt.unit.toUpperCase() + "<br>" + globalWeather.forecast[4].text;
                
                break;
        }

        $("#weather").html(htmlString);
        $("#day1").html(htmlForecast1);
        $("#day2").html(htmlForecast2);
        $("#day3").html(htmlForecast3);
        $("#day4").html(htmlForecast4);
    }

    var globalWeather = weather;
    function loadWeather(location, woeid) {
        $.simpleWeather({
            location: location,
            woeid: woeid,
            units: "c",
            
            success: function(weather) {
                
                globalWeather = weather;
                console.log(weather);
                //Current Weather
                htmlLocation = weather.city + ", " + weather.region;
                htmlWeather = '<i class = "icon-' + weather.code + '"></i>' + " " + weather.temp + ' &deg' + 
                weather.units.temp;
                htmlWind = weather.currently;
                htmlWindchill = "Wind " + weather.wind.chill + "&deg ";
                htmlWindspeed =  weather.wind.direction + " " + Math.round(weather.wind.speed) + " " + weather.units.speed;
                //display current weather
                $("#location").html(htmlLocation);
                $("#weather").html(htmlWeather);
                $("#conditions").html(htmlWind);
                $("#wind-chill").html(htmlWindchill);
                $("#wind-speed").html(htmlWindspeed)

                //Forecast weather
                htmlForecast1 = weather.forecast[1].day + "<br>" + '<i class = "forecast-icon icon-' + weather.code + '"></i>' + "<br>"
                + "High " + weather.forecast[1].high + "&deg "+ weather.units.temp + "<br>" + "Low " + weather.forecast[1].low + 
                "&deg "+ weather.units.temp + "<br>" + weather.forecast[1].text;
                htmlForecast2 = weather.forecast[2].day + "<br>" + '<i class = "forecast-icon icon-' + weather.code + '"></i>' + "<br>"
                + "High " + weather.forecast[2].high + "&deg "+ weather.units.temp + "<br>" + "Low " + weather.forecast[2].low + 
                "&deg "+ weather.units.temp + "<br>" + weather.forecast[2].text;
                htmlForecast3 = weather.forecast[3].day + "<br>" + '<i class = "forecast-icon icon-' + weather.code + '"></i>' + "<br>"
                + "High " + weather.forecast[3].high + "&deg "+ weather.units.temp + "<br>" + "Low " + weather.forecast[3].low + 
                "&deg "+ weather.units.temp + "<br>" + weather.forecast[3].text;
                htmlForecast4 = weather.forecast[4].day + "<br>" + '<i class = "forecast-icon icon-' + weather.code + '"></i>' + "<br>"
                + "High " + weather.forecast[4].high + "&deg "+ weather.units.temp + "<br>" + "Low " + weather.forecast[4].low + 
                "&deg "+ weather.units.temp + "<br>" + weather.forecast[4].text;    
                //Display Forecast
                $("#day1").html(htmlForecast1);
                $("#day2").html(htmlForecast2);
                $("#day3").html(htmlForecast3);
                $("#day4").html(htmlForecast4);

                if (weather.temp <= 35){ 
                    $("#body").css("background-color", "#1E50FF"); 
                  } else if (weather.temp > 35 && weather.temp <= 50) {
                    $("#body").css("background-color", "#2790E2");
                  } else if (weather.temp > 50 && weather.temp <= 80) {
                    $("#body").css("background-color", "#04C408");
                  } else if (weather.temp > 80) {
                    $("#body").css("background-color", "#FFA812");
                  }  
            }
        })
    }
  
})

    
