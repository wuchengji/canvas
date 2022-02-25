// const canvas = document.querySelector<HTMLCanvasElement>("#canvas") || new HTMLCanvasElement();
// const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

// // 线性渐变
// // ctx.rect(0, 0, canvas.width, canvas.height)
// // const gnt = ctx.createLinearGradient(0, 0, canvas.width, 0);
// // gnt.addColorStop(0.1, 'red');
// // gnt.addColorStop(0.2, 'green');
// // gnt.addColorStop(0.3, 'blue');
// // gnt.addColorStop(0.4, 'purple');
// // ctx.fillStyle = gnt
// // ctx.fill()

// // ctx.font = 'bold 50px Kai'
// // const gnt = ctx.createLinearGradient(0, 0, canvas.width, 0);
// // gnt.addColorStop(0, 'purple');
// // gnt.addColorStop(1, '#fff');
// // ctx.fillStyle = gnt
// // ctx.fillText("Canvas", 100, 100);

// // 径向渐变
// // const gnt = ctx.createRadialGradient(250, 250, 100, 300, 300, 50);
// // gnt.addColorStop(0, 'red')
// // gnt.addColorStop(0.5, 'blue')
// // gnt.addColorStop(1, 'yellow')
// // ctx.fillStyle = gnt;
// // ctx.arc(250, 250, 100, 0, 2*Math.PI);
// // ctx.fill()

// // ctx.font = 'bold 50px Kai'
// ctx.shadowOffsetX = 10;
// ctx.shadowOffsetY = 10;
// ctx.shadowColor = 'red'
// ctx.shadowBlur = 5
// // ctx.fillRect(100, 100, 100, 100)
// // ctx.fillText("Canvas", 100, 100);
// const img = new Image();
// img.src = '/src/img/aaa.png'
// img.onload = () => {
//   ctx.drawImage(img, 100, 100, 100, 100)
// }
