/**
 * 参考：https://qiita.com/soarflat/items/1a9613e023200bbebcb3#%E9%80%A3%E7%B6%9A%E3%81%97%E3%81%9F%E9%9D%9E%E5%90%8C%E6%9C%9F%E5%87%A6%E7%90%86asyncawait%E6%A7%8B%E6%96%87
 *
 * change red
 * ↓ interval
 * change yellow
 * ↓ interval
 * change green
 * と表示されるはず
 */
$(() => {
  "use strict";

  const colors = ["red", "yellow", "green"];
  const interval = 2000;
  let isRunning = false;

  const transitColor = color =>
    new Promise(resolve => {
      console.log(`change ${color}`);
      setTimeout(resolve, interval);
    });

  $("button").click(async () => {
    if (isRunning) return;
    isRunning = true;
    for (const color of colors) {
      await transitColor(color);
    }
    isRunning = false;
  });
});
