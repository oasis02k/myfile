$(document).ready(function(){
    $('.form-container form').on('submit', function(event){ 

        event.preventDefault(); // prevent the form from actually changing the browser URL

        $('.button-text').addClass('button-loading'); // make the spinner visible
        $('.button-text').text('');

        setTimeout(function(){
            $('.popup-container').removeClass('hide');
            $('.form-container').addClass('hide');
        }, 3000); // after 3 seconds, hide the form and show the popup

    });

    $('.dismiss-button').on('click', function(){
	    

        $('.popup-container').addClass('hide');// Make the popup container disappear.

    });
});