
$(document).ready(function(){

// Buttons pre-loaded to array//
var topics =['Hiking', 'Sunsets', 'Surfing', 'Volcanoes'];

//function to display new Hawaii Topic buttons//

function renderButtons(){
  $(".hiButtons").empty();  
  for (var i = 0; i < topics.length; i++) {

  $('.hiButtons').append('<button class='+topics[i]+' data='+topics[i]+'>' + topics[i] + '</button>');

 }
} 
 renderButtons();  

    // Adding click event listen listener to all buttons
    $("button").on("click", function(e) {
        var txt = $(this).attr('class');
        console.log(txt);

      // Constructing a queryURL using the tourism hawaii topic name
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        txt + "&api_key=zNUgiyXLe5ZSXSi9GTYp959A7f2vBHmc&limit=10";

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


      $("#submit-btn").on("click", function(event) {
        event.preventDefault();

        var hawaiiTopic = $("#addTopic").val().trim();
        
        topics.push(hawaiiTopic);

        renderButtons();
      });

    //add code to make animate or make gif's still
   
     

        var gif = object.data
        // Loop through the data array inside the object
         for (var i=0; i< gif.length; i++) {
            
        var rating = gif[i].rating;
        var still = gif[i].images.fixed_height_still.url;
        var animate = gif[i].images.fixed_height.url;
        $("#hiImages").prepend("<div class='col-md-2 text-center giftastic'>  <img class='gifs' data-still='"+still+"' data-animate='"+animate+"' data-state='still' src='"+ still+"'> <p class='rating'>Rating:  "+ rating +" </p> </div>")
            }
        })


        // Function for switching between still and animated gif
        function stillAnimate(){
                var state = $(this).attr("data-state");

                if( state === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                } else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                }

            }

    $(document).on("click", ".gifs", stillAnimate)
   

    


