jQuery(document).ready(function ($) {
    $.ajax({
        url: "../weather.json",
        dataType: "jsonp",
        success: function (data) {
            var location = data['Franklin']['City'];
            var temp_f = data['Franklin']['High'];
            alert("Current temperature in " + location + " is: " + temp_f);

            var locationName = $('#locationName');
            var highTemp = $('#highTemp');
            var tempMessage = $('#tempMessage');

            locationName.text(location);
            highTemp.text(temp_f);
            tempMessage.text("Current temperature in " + location + " is: " + temp_f);
        }
    });
});
