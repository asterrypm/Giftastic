$(document).ready(function(){

// Buttons on page initiation
var HawaiiButtons =["Hiking", "Scubadiving", "Sunsets", "Surfing"];




<!-- Purpose of this code is to dynamically generate buttons using only jQuery (i.e. no hardcoded html buttons) -->
<html>
<head>
    <title>Favorite Movies</title>
    <style type="text/css">
        button, div, form, input {
            margin: 10px;
        }
    </style>
</head>
<body>

<div class="container">
  <h1>Movie Search</h1>

  <!-- Movies will get dumped here -->
  <div id="moviesView">

  </div>

  <form id="movie-form">
    <label for="movie-input">Add a Movie Bro</label>
    <input type="text" id="movie-input"><br>
    
    <!-- Button triggers new movie to be added -->
    <input id="addMovie" type="submit" value="Add a Movie Bro">
  </form>

<script src='https://code.jquery.com/jquery-2.1.3.min.js'></script>
<script type="text/javascript">

// Initial array of movies
    var movies = ['The Matrix', 'The Notebook', 'Mr. Nobody', 'The Lion King'];

    // ========================================================

    // Generic function for displaying movie data 
    function renderButtons(){

      $("#moviesView").empty();  // YOUR CODE GOES HERE
       for (var i = 0; i < movies.length; i++) {
           $('#moviesView').append('<button>' + movies[i] + '</button>');
       }

    }

    // ========================================================

    // This function handles events where one button is clicked
    $('#addMovie').on('click', function(){

        // YOUR CODE GOES HERE
       var movie = $('#movie-input').val();
       $('#moviesView').append('<button>' + movie + '</button>');
       return false;

    });

    // ========================================================

    // This calls the renderButtons() function
    renderButtons();
</script>


</body>
</html>
