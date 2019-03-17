$(() => {
  'use strict';

  const colors = ['blue','yellow','red',''];
  const interval = 2000;
  let isRunnig = false;
  let change = false;

// 信号機の色を順番に帰る処理
  const transitColor = color =>
  new Promise(resolve => {
    $('#body').attr('light',color);
    setTimeout(resolve, interval);
  });

// 繰り返し処理およびボタンの表示切り替え
  $('#button').click(async () => {
    if (isRunnig) return;
    isRunnig = true;
    for (const color of colors) {
      console.log('start');
      $('#wait').addClass('show');
      $('#push').addClass('hide');
      await transitColor(color);
      $('#wait').removeClass('show');
      $('#push').removeClass('hide');
      console.log('end');
    }
    isRunnig = false;
  });

  // ボタンが押されたように見えるスタイリング
  $('#button')
    .mousedown(() => {
      $(event.currentTarget).addClass('press');
    })
    .mouseup(() => {
      $(event.currentTarget).removeClass('press');
    })
});
