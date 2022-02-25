// const canvas = document.querySelector<HTMLCanvasElement>("#canvas") || new HTMLCanvasElement();
// const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

// // ctx.beginPath()
// // let x = 0
// // let y = 0
// // ctx.fillRect(0, 0, 100, 100)
// // setInterval(() => {
// //   x++;
// //   y++;
// //   ctx.clearRect(0, 0, 500, 500);
// //   ctx.translate(x, y);
// //   ctx.fillRect(0, 0, 100, 100)
// // }, 500)

// // ctx.fillRect(200, 200, 100, 100)
// // ctx.translate(-100, -100)
// // ctx.scale(1.5, 1.5)
// // ctx.fillStyle = 'rgba(0, 0, 0, 0.3)'
// // ctx.fillRect(200, 200, 100, 100)
// // ctx.closePath()

// // ctx.fillRect(200, 200, 50, 50)
// // ctx.translate(225, -95)
// // ctx.rotate(45 * Math.PI/180)
// // ctx.fillRect(200, 200, 50, 50)

// // 彩虹
// const colorList = ['red', 'orange', 'yellow', 'green', 'blue', 'cyan', 'purple'];
// ctx.arc(250, 300, 250, 0, -Math.PI, true)
// for (let i = 0; i < colorList.length; i++) {
//   ctx.translate(0, 10 * i);
//   ctx.beginPath()
//   ctx.arc(250, 300, 250, 0, -Math.PI, true)
//   ctx.fillStyle = colorList[i];
//   ctx.fill()
//   ctx.closePath()
// }
// ctx.beginPath()
// ctx.arc(250, 300, 250, 0, -Math.PI, true)
// ctx.fillStyle = 'white'
// ctx.fill()
// ctx.closePath()