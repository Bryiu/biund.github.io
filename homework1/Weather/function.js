$(document).ready(function () {

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=23cf72c80e6015d8c3cf10bbcfdcd31a";
    var proxy = "https://chriscastle.com/proxy/index.php?:proxy:";
    var cityArray = [];
    var city = $("#city-input").val().trim();

    $("#add-city").on("click", function () {

        event.preventDefault();
    
        function searchWeather(city){

            $.ajax({
                type: "GET",
                url: proxy + queryURL,
                dataType: 'json',
            })
//do success funtion
        };


            function render() {
                for (var i = 0; i < cityArray.length; i++) {
                    var a = $("<div class='newcity'>");
                    var p = a.text(cityArray[i]);

                    $("#cityList").append(p);
                }
            }
            render();
        });
    });
