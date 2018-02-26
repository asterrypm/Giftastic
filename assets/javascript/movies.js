// Function for displaying movie data
      function renderButtons() {

        // Deleting the movie buttons prior to adding new movie buttons
        // (this is necessary otherwise we will have repeat buttons)
        $("#movies-view").empty();

        // Looping through the array of movies
        for (var i = 0; i < movies.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array.
          // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class
          a.addClass("movie");
          // Adding a data-attribute with a value of the movie at index i
          a.attr("data-name", movies[i]);
          // Providing the button's text with a value of the movie at index i
          a.text(movies[i]);
          // Adding the button to the HTML
          $("#movies-view").append(a);
        }
      }

    // Render Buttons
function renderingButtons(){
    // Empty buttons area
    $(".buttons").empty();
    // Loop through buttons array and append buttons to page
    for (var i=0; i< arrayOfButtons.length; i++){
    $(".buttons").append("<button class='btn btn-danger sunny' data-name='"+arrayOfButtons[i]+"'>"+arrayOfButtons[i]+"</button>")
    }
}









    // This function handles events where one button is clicked
    $('#addMovie').on('click', function(){

        // YOUR CODE GOES HERE
       var movie = $('#movie-input').val();
       $('#moviesView').append('<button>' + movie + '</button>');
       return false;

    });

    // ========================================================
