$(function() {
    let mainav = document.getElementById('js-menu');
    let navbartoggle = document.getElementById('js-nav-toggle');
    let navscroll = document.getElementById('js-nav-scroll');
    

    
    navbartoggle.addEventListener("click", function() {
        mainav.classList.toggle("show");
    });
    

    window.on("scroll",function () {
    
        if(window.pageYOffset < 0){

            navscroll.addClass("nav-scroll");

        }else{

            n.removeClass("nav-scroll");
        }
    });
});