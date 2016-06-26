$(function(){ // this will be called when the DOM is ready
    $('#name').keyup(function() {
       $('#greet').html($('#name').val());
    });
});
