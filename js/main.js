$(function () {
    $('#button').click(function() {
      setTimeout(function(){
        $('#blue').css('background', 'royalblue');
      },1000);
      setTimeout(function(){
        $('#blue').css('background', 'grey');
      },2000);
      setTimeout(function() {
        $('#yellow').css('background', '#FFFF00');
      },2000);
      setTimeout(function() {
        $('#yellow').css('background', 'grey');
      },3000);
      setTimeout(function() {
        $('#red').css('background', '#FF0000');
      },3000);
      setTimeout(function() {
        $('#red').css('background', 'grey');
      },4000);
    });
});
