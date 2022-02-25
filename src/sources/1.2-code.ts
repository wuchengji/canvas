// const canvas = document.querySelector<HTMLCanvasElement>("#canvas") || new HTMLCanvasElement();
// const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

// 直线
// ctx.moveTo(0, 0)
// ctx.lineTo(300, 300)
// ctx.stroke()

// ctx.moveTo(200, 100)
// ctx.lineTo(400, 100)
// ctx.lineTo(200, 300)
// ctx.moveTo(200, 300)
// ctx.lineTo(400, 300)
// ctx.stroke()

//  矩形
// ctx.strokeStyle = "red";
// ctx.strokeRect(100, 100, 200, 100);

// ctx.fillStyle = "purple"
// ctx.fillRect(100, 100, 200, 100);

// ctx.strokeStyle = "blue";
// ctx.fillStyle = "pink"
// ctx.rect(100, 100, 200, 100)
// ctx.fill();
// ctx.stroke();

// setTimeout(() => {
//   ctx.clearRect(120, 120, 160, 60)
// }, 1000)

//  多边形
// ctx.moveTo(200, 100)
// ctx.lineTo(200, 300)
// ctx.lineTo(400, 200)
// ctx.lineTo(200, 100)
// ctx.stroke()

//  调色板
// for (let i = 0; i < 10; i++) {
//   for (let j = 0; j < 10; j++) {
//     ctx.fillStyle = `rgb(${i * 25},${j * 25},${(i + j)*15})`
//     ctx.fillRect(i * 40, j * 40, 40, 40);
//   }
// }