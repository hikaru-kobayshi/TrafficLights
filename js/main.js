$(() => {
  'use strict';

  const duration = 1000;
  const colors = ['blue','yellow','red',''];
  const len = colors.length;
  let isRunning = false;

  // 信号機の色を時間差で変化させる
  const transitColor = color =>
  new Promise(resolve => {
    for (let i=0; i<len; i++) {
      $('#body').delay(duration).queue(function() {
        $(this).attr('light', colors[i]).dequeue();
      });
    }
  });
  // ボタンクリック時の処理およびボタン上の表示切り替え処理
  $('#button').click(async () => {
    if (isRunning) return;
    isRunning = true;
    for (const color of colors) {
      console.log("start!");
      setTimeout(function() {
        $('#wait').removeClass('show');
        $('#push').removeClass('hide');
        console.log("end!");
      },4000);
      $('#wait').addClass('show');
      $('#push').addClass('hide');
      await transitColor(color);
      isRunning = false;
    }
  });
  // ボタンが押されたように見えるスタイリング
  $('#button')
    .mousedown(function(){
      $(this).addClass('press');
    })
    .mouseup(function(){
      $(this).removeClass('press');
    })
});
