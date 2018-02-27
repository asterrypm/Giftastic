
$(document).ready(function(){

// Buttons pre-loaded to array//
var topics =['Hiking', 'Scuba diving', 'Sunsets', 'Surfing', 'Volcanoes'];

//function to display new Hawaii Topic buttons//

function renderButtons(){

  $("#hiButtons").empty();  
  for (var i = 0; i < topics.length; i++) {
  $('#hiButtons').append('<button>' + topics[i] + '</button>');
       
   }

}
    // Adding click event listen listener to all buttons
    $("hiButtons").on("click", function() {
      // Grabbing and storing the data-hawaii property value from the button
      var hawaii = $(this).attr("data-hawaii");

      // Constructing a queryURL using the tourism hawaii topic name
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        hawaii + "&api_key=zNUgiyXLe5ZSXSi9GTYp959A7f2vBHmc&limit=10";

      // AJAX request with the queryURL
      $.ajax({
          url: queryURL,
          method: "GET"
        })
        // After data comes back from the request
        .then(function(response) {
          console.log(queryURL);

          console.log(response);
          // storing the data from the AJAX request in the results variable
          var results = response.data;

          // Looping through each result item
          for (var i = 0; i < results.length; i++) {

            // Creating and storing a div tag
            var hawaiiDiv = $("<div>");

            // Creating a paragraph tag with tourism item's rating
            var p = $("<p>").text("Rating: " + results[i].rating);

            // Creating and storing an image tag
            var hawaiiImage = $("<img>");
            // Setting the src attribute of the image to a property pulled off the result item
            hawaiiImage.attr("src", results[i].images.fixed_height.url);

            // Appending the paragraph and image tag to the hawaiiDiv
            hawaiiDiv.append(p);
            hawaiiDiv.append(hawaiiImage);

            // Prependng the hawaiiDiv to the HTML page in the "#hiImages" div
            $("#hiImages").prepend(hawaiiDiv);
          }
        });
    });

    //store input from search box #addButton to create new button and add topic to above array
    //add code to make animate or make gif's still

    // This calls the renderButtons() function
    renderButtons();

    });
