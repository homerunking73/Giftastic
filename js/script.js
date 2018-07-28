$(document).ready(function () {

    var $input = $('input');
    var $submit = $('#submit');
    var apiKey = "RJxyoMmy0GjboFZhvuvgiRvYWyjk8D67";
    var imgBody = $('.img-body');


    $submit.on('click', function (event) {
        event.preventDefault();
        var inputVal = $input.val();
        //console.log(inputVal);
        getGiphys(inputVal);
    });


    function getGiphys(inputVal) {
        console.log(inputVal);
        $.ajax({
            url: "http://api.giphy.com/v1/gifs/search?q=" + inputVal + "&api_key=" + apiKey,
            method: "GET"
        }).done(function (response) {
            console.log(response.data);
            var giphyList = response.data;
            for (var i = 0; i < giphyList.length; i++) {
                var url = giphyList[i].images.fixed_height_downsampled.url;

                var $newImg = $('<img>');
                $newImg.attr('src', url);
                console.log($newImg)
                var imgBox = $('#giphy')

                // $newImg.addClass('img-box');
                imgBox.append($newImg);
            }
        });
    };


});

// loop through array and put each element in the array inside 
//it's own div create image tag and then append to div
// append to ID giphy div for each element creat code structure and then
// append to parent div...