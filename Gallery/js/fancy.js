$(document).ready(function () {
    $('[data-fancybox="gallery"]').fancybox({
        loop: true,
        toolbar: "auto",
        buttons: [
            "zoom",
            "share",
            "slideShow",
            "fullScreen",
            "download",
            "thumbs",
            "close"
            ],
    })
});

$(document).ready(function (){

    $('.gallery-item').isotope({
        filter: '.food',
        layoutMode: 'masonry'
        });
        $('.gallery-menu ul li').click(function(){
        $('.gallery-menu ul li').removeClass('active');
        $(this).addClass('active');
        
        var selector = $(this).attr('data-filter');
        $('.gallery-item').isotope({
          filter: selector
        });
        return false;
        });
})