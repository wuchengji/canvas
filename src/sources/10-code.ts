// const canvas =
//   document.querySelector<HTMLCanvasElement>("#canvas") ||
//   new HTMLCanvasElement();
// const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

// // 绘制一个跟随鼠标的箭头类
// class Arrow {
//   x = 0;
//   y = 0;
//   ctx: CanvasRenderingContext2D;
//   constructor(x: number, y: number, ctx: CanvasRenderingContext2D) {
//     this.x = x;
//     this.y = y;
//     this.ctx = ctx;
//     this.drawArrow(0);
//   }
//   drawArrow(deg: number) {
//     this.ctx.save()
//     this.ctx.translate(this.x, this.y)
//     this.ctx.rotate(deg)
//     this.ctx.moveTo(0, 0);
//     this.ctx.lineTo(-50, -10);
//     this.ctx.lineTo(20, -10);
//     this.ctx.lineTo(20, -30);
//     this.ctx.lineTo(50, 0);
//     this.ctx.lineTo(20, 30);
//     this.ctx.lineTo(20, 10);
//     this.ctx.lineTo(-50, 10);
//     this.ctx.lineTo(-50, -10);
//     this.ctx.fillStyle = 'black'
//     this.ctx.fill();
//     this.ctx.restore()
//     this.ctx.beginPath();
//     this.ctx.arc(this.x, this.y, 2, 0, 2 * Math.PI);
//     this.ctx.fillStyle = 'red'
//     this.ctx.fill();
//   }
//   linePoint(x: number, y: number) {
//     this.ctx.beginPath();
//     this.ctx.setLineDash([2, 2]);
//     this.ctx.moveTo(this.x, this.y);
//     this.ctx.lineTo(x, y);
//     this.ctx.stroke();
//   }
//   getDeg(x: number, y: number) {
//     const deg = Math.atan2(y - this.y, x - this.x) * (180 / Math.PI);
//     this.rotate(deg);
//   }
//   rotate(deg: number) {
//     this.drawArrow(deg * Math.PI / 180)
//   }
//   doAnimate(x: number, y: number) {
//     this.ctx.clearRect(0, 0, canvas.width, canvas.height);
//     this.linePoint(x, y);
//     this.getDeg(x, y);
//   }
// }

// // let arrow = new Arrow(200, 200, ctx);
// // // @ts-ignore
// // const mouse = window.tools.getMouse(canvas);
// // canvas.addEventListener("mousemove", function () {
// //   arrow.doAnimate(mouse.x, mouse.y);
// // });

// // 椭圆
// class Ellips {
//   centerX = 0
//   centerY = 0
//   radiusX = 10
//   radiusY = 5
//   canvas: HTMLCanvasElement;
//   ctx: CanvasRenderingContext2D;
//   constructor(canvas: HTMLCanvasElement, cx:number, cy:number, rx:number, ry:number) {
//     this.centerX = cx;
//     this.centerY = cy;
//     this.radiusX = rx;
//     this.radiusY = ry;
//     this.canvas = canvas;
//     this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D
//     this.draw()
//   }
//   draw() {
//     this.ctx.beginPath()
//     this.ctx.moveTo(this.centerX + this.radiusX, this.centerY)
//     for (let deg = 1; deg < 360; deg++) {
//       const x = this.centerX + Math.cos(deg * Math.PI/180)*this.radiusX 
//       const y = this.centerY + Math.sin(deg * Math.PI/180)*this.radiusY
//       this.ctx.lineTo(x, y)
//     }
//     this.ctx.closePath()
//     this.ctx.stroke()
//   }
//   ballRound(x: number, y: number) {
//     this.ctx.beginPath()
//     this.ctx.arc(x, y, 5, 0, 2*Math.PI)
//     this.ctx.stroke()
//   }
//   ani(deg: number) {
//     window.requestAnimationFrame(() => {
//       this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
//       this.draw()
//       this.ballRound(this.centerX + Math.cos(deg * Math.PI/180)*this.radiusX, this.centerY + Math.sin(deg * Math.PI/180)*this.radiusY)
//       this.ani(++deg)
//     })
//   }
// }

// // const ellipse = new Ellips(canvas, 250, 250, 100, 50)
// // ellipse.ani(0)

// // 波形
// // const speed = 0.1
// // const swing = 5
// // function XMove(deg:number) {
// //   window.requestAnimationFrame(() => {
// //     ctx.beginPath()
// //     ctx.clearRect(0, 0, canvas.width, canvas.height)
// //     ctx.translate(Math.sin(deg) * swing,0)
// //     ctx.arc(100, 250, 30, 0, 2 * Math.PI)
// //     ctx.stroke()  
// //     deg+=speed;
// //     XMove(deg)
// //   })
// // }
// // XMove(0)

// // let v = 0;
// // let a = 0.1;
// // function XMove() {
// //   window.requestAnimationFrame(() => {
// //     ctx.beginPath()
// //     ctx.clearRect(0, 0, canvas.width, canvas.height)
// //     ctx.translate(v, 0)
// //     ctx.arc(40, 250, 30, 0, 2 * Math.PI)
// //     ctx.stroke()  
// //     v+=a;
// //     if(v > 8) {
// //       a = -0.1
// //     }
// //     XMove()
// //   })
// // }
// // setTimeout(() => {
// //   XMove()
// // },0)

// let v = 0;
// let a = 0.1;
// let g = 9.8
// function Move() {
//   window.requestAnimationFrame(() => {
//     ctx.beginPath()
//     ctx.clearRect(0, 0, canvas.width, canvas.height)
//     ctx.translate(v, 0)
//     ctx.translate(0, v)
//     ctx.arc(40, 250, 30, 0, 2 * Math.PI)
//     ctx.stroke()  
//     v+=a;
//     if(v > 8) {
//       a = -0.1
//     }
//     Move()
//   })
// }
// Move()

