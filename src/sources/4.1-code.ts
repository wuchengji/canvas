// const canvas = document.querySelector<HTMLCanvasElement>("#canvas") || new HTMLCanvasElement();
// const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

// const img = new Image();
// img.src = '/src/img/aaa.png'
// img.onload = () => {
//   // 绘制图片
//   // ctx.drawImage(img, 100, 100);
//   // ctx.drawImage(img, 0, 0, 100, 100)
//   // ctx.drawImage(img, 50, 50, 50, 50, 0, 0, 100, 100)

//   // 平铺图片
//   // ctx.rect(0, 0, 300, 300)
//   // const pattern = ctx.createPattern(img, 'repeat') as CanvasPattern;
//   // ctx.fillStyle = pattern;
//   // ctx.fill();

//   // // 1.创建裁减模板
//   // ctx.arc(50, 50, 50, 0, 360 * Math.PI/180);
//   // // 2.裁剪
//   // ctx.clip()
//   // // 3.绘制裁剪图片
//   // ctx.drawImage(img, 0, 0);

//   // 图片填充文字
//   const pattern = ctx.createPattern(img, 'repeat') as CanvasPattern
//   ctx.font = 'bold 100px Kai'
//   ctx.fillStyle = pattern;
//   ctx.fillText('CANVAS', 80, 100);
// }

//   // // 创建一个新的canvas
//   // const canvas2 = document.createElement('canvas')
//   // canvas2.width = 50;
//   // canvas2.height = 50;
//   // const ctx2 = canvas2.getContext('2d') as CanvasRenderingContext2D;
//   // ctx2.fillStyle = 'blue'
//   // ctx2.arc(25, 25, 25, 0, 360 * Math.PI/180);
//   // ctx2.fill()

//   // ctx.rect(0, 0, 300, 300)
//   // const pattern = ctx.createPattern(canvas2, 'repeat-x') as CanvasPattern;
//   // ctx.fillStyle = pattern;
//   // ctx.fill();