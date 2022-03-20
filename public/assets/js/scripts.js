
function toggleMode() {
$('.icon-mode').toggleClass(["fa-sun","fa-moon"])
const theme = $('.icon-mode').hasClass('fa-sun') ? "light" : "dark"
document.documentElement.setAttribute("data-theme", theme);
localStorage.theme = theme;
}

if (localStorage.theme) {
    document.documentElement.setAttribute("data-theme", localStorage.theme);
    if (localStorage.theme === "light"){
        $('.icon-mode').removeClass(['fa-sun','fa-moon']).addClass('fa-sun');
    } else {
            $('.icon-mode').removeClass(['fa-sun','fa-moon']).addClass('fa-moon');               
    }
}   

$("body").on("contextmenu", "img", function(e) {
    return false;
});

$(window).on('resize', function(){
    if ($(this).width() >= 1080) {
        $('.sidebar').show();
    } else {
        $('.sidebar').hide();         
    }
    $('.nav-bars, .mobile-topbar-logo').show();
    $('.mobile-topbar-nav-icon').removeClass("fa-xmark")
    $('.mobile-topbar-nav-icon').addClass("fa-bars")  
});

function toggleMenu(id) { 
    var el = $('#' + id).parent().attr("id")
    $('.nav-child.' + el).toggleClass('group-visible')
    $('#' + el + '-icon').toggleClass(["fa-angle-down","fa-angle-right"])
}

function toggleNav() {
    $('.sidebar').toggle();
    $('.mobile-topbar-nav-icon').toggleClass(["fa-xmark","fa-bars"])
}


