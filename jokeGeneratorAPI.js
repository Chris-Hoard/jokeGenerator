/* global $ */

//Logic to return a Church Norris Joke from the API
function getJoke(){
  var url = "https://api.chucknorris.io/jokes/random";
  $.ajax({
    url: url,
    success: function(response) {
        console.log(response);
          console.log(response.quote);
           $('#joke-text').text(response.value);
       return response.value;
  
    },
    dataType: "json"
  });
  
}
//On initial initalization, display the first Quote
getJoke();

 