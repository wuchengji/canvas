// const canvas =
//   document.querySelector<HTMLCanvasElement>("#canvas") ||
//   new HTMLCanvasElement();
// const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

// // clip()
// // // 1. 绘制基本图形
// // ctx.rect(100, 100, 100, 100)
// // // 2. 裁剪矩形作为剪切区域
// // ctx.clip()
// // // 3. 画个超出矩形范围的图片（填充颜色也行）
// // const img = new Image()
// // img.src = '/src/img/man.jpg'
// // img.onload = () => {
// //   ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
// // }

// // save 和 restore
// // 1.将没有裁剪的环境保存下来
// ctx.save();
// // 2.开始裁剪操作
// ctx.beginPath();
// ctx.arc(250, 250, 100, 0, Math.PI * 2);
// ctx.stroke();
// ctx.clip();
// const img = new Image();
// img.src = "/src/img/man.jpg";
// img.onload = () => {
//   ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//   fn()
// };
// function fn() {
//   // 3.裁剪完成，恢复之前的状态，去加不需要裁剪的图
//   ctx.restore();
//   const img2 = new Image();
//   img2.src = "/src/img/aaa.png";
//   img2.onload = () => {
//     ctx.drawImage(img2, 100, 250, 50, 50);
//   };
// }
