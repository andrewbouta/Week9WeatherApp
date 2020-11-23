$(document).ready(function() {
    $('form').submit(function() {
        // your code here (build up your url)
        event.preventDefault();
        console.log('Data sent.');
        var citName = $('#cityName').val();

        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&" + "units=imperial" + openWeatherMapAPI;
        console.log ( url );

        $.get(url, function(res) {
            // your code here
            console.log(res);
            var temp = res.main.temp;
            console.log(temp);
            $('body').append($("<p> The temperature in " + cityName + " is: " + temp + " degrees F" + "<p>"));
        }, 'json');
        // don't forget to return false so the page doesn't refresh
        return false;
    });
});