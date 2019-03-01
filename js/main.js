$(function(){
  const myDefer = $.Deferred();
  $('#button').click(function(){
    myDefer.resolve();
  });
  $('#button').dblclick(function(){
    myDefer.reject();
  });

  const duration = 1500;
  const myPromise = myDefer.promise();
  myPromise.then(
    function(){
      $('#body').delay(duration).queue(function(next) {
        $(this).attr('light', 'blue').dequeue();
      }).delay(duration).queue(function(next) {
        $(this).attr('light', 'yellow').dequeue();
      }).delay(duration).queue(function(next) {
        $(this).attr('light', 'red').dequeue();
      }).delay(duration).queue(function(next) {
        $(this).attr('light', '').dequeue();
      });
    });
  $('#reload').click(function() {
    location.reload();
  });

  {
    const btn = document.getElementById('button');

    btn.addEventListener('mousedown', () => {
      btn.classList.add('press');
    });
    btn.addEventListener('mouseup', () => {
      btn.classList.remove('press');
    });
  }
});
