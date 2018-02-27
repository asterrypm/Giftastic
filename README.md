# Giftastic
GIPHY activity

 API KEY:
 zNUgiyXLe5ZSXSi9GTYp959A7f2vBHmc

 Purpose of this code is to dynamically generate buttons using only jQuery (i.e. no hardcoded html buttons) -->


// This function handles when one button is clicked and add a new
    $('#hiButtons').on('click', function(){

       var addButton = $('#hawaii-input').val();
       $('#hiButton').append('<button>' + addButton + '</button>');
       return false;

    });