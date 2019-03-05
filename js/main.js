$(function(){
  const duration = 1500;
  const colors = ['blue','yellow','red',''];
  const len = colors.length;
  let isRunning = false;

  $('#button').click(function(){
    if (isRunning)return;
    isRunning = true;
    for (let i=0; i<len; i++) {
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
    };
  });
  $('#button')
    .mousedown(function(){
      $(this).addClass('press');
    })
    .mouseup(function(){
      $(this).removeClass('press');
    })
});
