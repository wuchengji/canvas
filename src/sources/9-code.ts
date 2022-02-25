// const canvas =
//   document.querySelector<HTMLCanvasElement>("#canvas") ||
//   new HTMLCanvasElement();
// const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

// // 鼠标事件
// // @ts-ignore
// // const mouse = window.tools.getMouse(canvas)
// // canvas.addEventListener('mousemove', function(){
// //   console.log(mouse.x, mouse.y);
// // })

// // 键盘事件
// // @ts-ignore
// const key = window.tools.getKey();
// window.addEventListener("keydown", function () {
//   console.log(key);
// });

// // 动画效果
// let x = 0;
// (function move(){
//   window.requestAnimationFrame(move)
//   ctx.clearRect(0, 0, canvas.width, canvas.height)
//   ctx.beginPath()
//   ctx.arc(x, 250, 50, 0, 2*Math.PI)
//   ctx.stroke()
//   x+=2
// })()
