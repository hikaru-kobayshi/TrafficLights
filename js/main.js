$(function(){
  const duration = 1500;
  const colors = ['blue','yellow','red',''];
  const len = colors.length;
  let isRunning = false;

  if (isRunning)return;
    for (let i=0; i<len; i++) {
      $('#button').click(function(){
        isRunning = true;
        $.when(
          $('#wait').addClass('show'),
          $('#push').addClass('hide'),
          $('#body').delay(duration).queue(function() {
            $(this).attr('light', colors[i]).dequeue();
          })
        ).done(function() {
          $('#wait').removeClass('show')
          $('#push').removeClass('hide')
          isRunning = false;
        });
      });
    }
  $('#button')
    .mousedown(function(){
      $(this).addClass('press');
    })
    .mouseup(function(){
      $(this).removeClass('press');
    })
});
