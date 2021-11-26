$(document).ready(function(){
$(function(){
    $('.about-title').textyle({
        duration: 500,
        delay: 200,
        easing: 'linear',
        callback : function(){
            $(this).css({
                transform : 'translateY(0px) rotateY(360deg)',
            })
        }
    })
    $('p').textyle()
})
})
