
$(document).ready(function(){

// Buttons pre-loaded to array//
var hawaiiButtons =['Hiking', 'Scuba diving', 'Sunsets', 'Surfing', 'Volcanos'];


//function to display new Hawaii Topic buttons//

function renderButtons(){

  $("#hiButtons").empty();  
  for (var i = 0; i < hawaiiButtons.length; i++) {
  $('#hiButtons').append('<button>' + hawaiiButtons[i] + '</button>');
       
   }

}

// This function handles when one button is clicked
    $('#hiButtons').on('click', function(){

        
       var addButton = $('#hawaii-input').val();
       $('#hiButton').append('<button>' + addButton + '</button>');
       return false;

    });
    
    // This calls the renderButtons() function
    renderButtons();
    


    });
