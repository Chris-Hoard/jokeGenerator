/* global $ */

$(document).ready(function() {
   
   $("#jokeGenerator").submit(function (event){
     event.preventDefault();
     var url = "https://api.chucknorris.io/jokes/random";

     $.ajax({
            url: url,
            //data: data,
            type: "GET",
            success: function(response) {
                //console.log(response);
                var html = "<h1 id='jokeText' class='well'>"+response.value +"</h1>";
                console.log(html);
                $("#jokeHolder").html(html);
                var href = $('#tweetLink').attr('href');
                $('#tweetLink').attr('href',href +response.value );

              
            }
        });
  });
});




 