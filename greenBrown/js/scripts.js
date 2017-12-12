$(document).ready(function(){

$('#eventsSlider').carousel();
$('membersSlider').carousel();
    $('#loginBtn').click(function(){
        $('#loginForm').fadeIn();
    });
    $("#loginForm button").click(function(){
        $('#loginForm').fadeOut();
        $('#loginBtn').hide();
        $('#loggedIn').show();
    });
var totalItems = jQuery('.slider .carousel-item').length;
  if(totalItems == 1){
        //one slide only
        $('.slider a').hide();

    }
jQuery('.slider').on('slid.bs.carousel', function(){
    var totalItems = jQuery('.slider .carousel-item').length;
    var currentIndex = jQuery('.slider .carousel-item.active').index() + 1;
        if(totalItems == currentIndex){
            //last slide
        $('.slider #next').removeClass('active');
        $('.slider #prev').addClass('active');
    } else if(currentIndex == 1){
        //first slide
        $('.slider #next').addClass('active')
        $('.slider #prev').removeClass('active')
    }
    else{
        //middle slides
        $('.slider #next').addClass('active');
        $('.slider #prev').addClass('active');
    }

});
});

