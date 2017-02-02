$(document).ready(function () {
    $('._content').addClass('hiden')
});
$(window).load(function(){
    $('._content').removeClass('hiden');

    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 15
    });

});


$(function(){

    $('img').hover(function () {
        $(this).next('span').html($(this).attr('alt'));
    })

});