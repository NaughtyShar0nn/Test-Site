$(function() {
    let mainav = document.getElementById('js-menu');
    let navbartoggle = document.getElementById('js-nav-toggle');
    let navscroll = document.getElementById('js-nav-scroll');
    var sticky = mainav.offsetTop
    
    
    $.scrollIt({
        easing: 'swing',          
        scrollTime: 600,          
        activeClass: 'active',    
        onPageChange: null,       
        topOffset: -80     
    })
    
    navbartoggle.addEventListener("click", function() {
        mainav.classList.toggle("show");
    });
    
    window.onscroll = function() {ScrolledNav()};
    
    function ScrolledNav() {
        if (window.pageYOffset > 100) {
            navscroll.classList.add("nav-scroll")
        } 
        else {
            navscroll.classList.remove("nav-scroll");
        }
    }
});