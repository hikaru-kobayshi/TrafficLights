$(function(){
  const duration = 1500;
  let isRunning = false;

  $('#button').click(function(){
    if (isRunning) return;
    isRunning = true;
    $('#body').delay(duration).queue(function() {
      $(this).attr('light', 'blue').dequeue();
    }).delay(duration).queue(function() {
      $(this).attr('light', 'yellow').dequeue();
    }).delay(duration).queue(function() {
      $(this).attr('light', 'red').dequeue();
    }).delay(duration).queue(function() {
      $(this).attr('light', '').dequeue();
      isRunning = false;
    });
  });
  $('#button')
  .mousedown(function(){
    $(this).addClass('press');
  })
  .mouseup(function(){
    $(this).removeClass('press');
  });
});
