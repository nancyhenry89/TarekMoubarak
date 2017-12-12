$(document).ready(function(){
    $('#carousel-example-generic').carousel({wrap: true});

$('#eventsSlider').carousel();
    $('#loginBtn').click(function(){
        $('#loginForm').fadeIn();
    });
    $("#loginForm button").click(function(){
        $('#loginForm').fadeOut();
        $('#loginBtn').hide();
        $('#loggedIn').show();
    });
jQuery('#eventsSlider').on('slid.bs.carousel', function(){
    var totalItems = jQuery('#eventsSlider .carousel-item').length;
    var currentIndex = jQuery('#eventsSlider .carousel-item.active').index() + 1;
        if(totalItems == currentIndex){
            //last slide
        $('#eventsSlider #next').removeClass('active');
        $('#eventsSlider #prev').addClass('active');
    } else if(currentIndex == 1){
        //first slide
        $('#eventsSlider #next').addClass('active')
        $('#eventsSlider #prev').removeClass('active')
    }else{
        //middle slides
        $('#eventsSlider #next').addClass('active');
        $('#eventsSlider #prev').addClass('active');
    }

});
});

