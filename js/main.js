$(function(){
  var myDefer = $.Deferred();

  $('#button').click(function(){
    myDefer.resolve();
  });
  $('#button').dblclick(function(){
    myDefer.reject();
  });

  var myPromise = myDefer.promise();

  myPromise.then(
    function(){
      $('#blue').css('background', 'royalblue');
    }
  ).then(
    function(){
      setTimeout(function(){
        $('#yellow').css('background', '#FFFF00');
        $('#blue').css('background', '');
      },1500);
    }
  ).then(
    function(){
      setTimeout(function(){
        $('#red').css('background', '#FF0000');
        $('#yellow').css('background', '');
      },3000);
    }
  ).then(
    function(){
      setTimeout(function(){
        $('#red').css('background', '');
      },4500);
    }
  );
  $('#reload').click(function() {
    location.reload();
  });
});
