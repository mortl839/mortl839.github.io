var clicked = false;
$('.wrapper').on('click', function(e){
    $('.wrapper').removeClass('wrapper').addClass('wrapper2');
    e.preventDefault();
});