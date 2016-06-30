/*

Object Adjective      : global.js
author                : Jeremy Anderson (objectajdective.com)
version	              : 4.0

.................................................*/

$(document).ready(function() {
	
    $('.jq-hamburger').click(function(event){
        $('.jq-hamburger-nav, .jq-branding').toggleClass('open');
        event.preventDefault();
    });
    
    $('.jq-gallery a').venobox({
        numeratio: true
    });
    
    stickyHeader();
    
    $(window).resize(function() {
        stickyHeader();
    });
    
    $('.img-frame, .page-template-portfolio-page .feature-image, .pitch-banner h1, .main-content figure img').addClass('loaded');
    
    
});

//End Ready......................................


function stickyHeader() {
    // get height of first two headers
    var scrollHeight = 45;
    var self = this;
    if($( window ).width() > 750) {
        
        $(window).scroll(function() {
            // get current scroll position
            var scrollTop = $(this).scrollTop();
            
            // if current position > scrollHeight
            if (scrollTop > scrollHeight) {
                // make fixed and change background color
                $('.jq-branding, .pitch-banner, .main-content').addClass('fixed-nav');
    
            } else if (scrollTop < scrollHeight) {
                // unfix and go back to default color
                $('.jq-branding, .pitch-banner, .main-content').removeClass('fixed-nav');
            }
    
        });
    
    }
}