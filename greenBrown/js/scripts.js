$(document).ready(function(){
    $('#loginBtn').click(function(){
        $('#loginForm').fadeIn();
    });
    $("#loginForm button").click(function(){
        $('#loginForm').fadeOut();
        $('#loginBtn').hide();
        $('#loggedIn').show();
    });
});
