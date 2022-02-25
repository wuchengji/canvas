// const canvas = document.querySelector<HTMLCanvasElement>("#canvas") || new HTMLCanvasElement();
// const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

// const img = new Image()
// img.src = '/src/img/man.jpg'
// img.onload = () => {
//   ctx.drawImage(img, 0, 0, img.width/2, img.height/2);
//   const imageData = ctx.getImageData(0, 0, 500, 500)
//   console.log(imageData);
  
//   // ctx.putImageData(imageData, 100, 100)

//   // 翻转颜色
//   // for (let i = 0; i < imageData.data.length; i+=4) {
//   //   // 遍历每个像素
//   //   imageData.data[i] = 255 - imageData.data[i] 
//   //   imageData.data[i+1] = 255 - imageData.data[i+1] 
//   //   imageData.data[i+2] = 255 - imageData.data[i+2] 
//   // }

//   // // 黑白颜色
//   // for (let i = 0; i < imageData.data.length; i+=4) {
//   //   // 遍历每个像素
//   //   // const avg = (imageData.data[i] + imageData.data[i+1]  + imageData.data[i+2] ) / 3
//   //   // 加权平均值
//   //   imageData.data[i] = imageData.data[i] * 0.39 + imageData.data[i + 1] * 0.76 + imageData.data[i+2] * 0.18
//   //   imageData.data[i+1] = imageData.data[i] * 0.35 + imageData.data[i + 1] * 0.68 + imageData.data[i+2] * 0.16
//   //   imageData.data[i+2] = imageData.data[i] * 0.27 + imageData.data[i + 1] * 0.53 + imageData.data[i+2] * 0.13
//   // }

//   // 变亮、暗
//   // for (let i = 0; i < imageData.data.length; i+=4) {
//   //   const l = -80
//   //   imageData.data[i] += l
//   //   imageData.data[i+1] += l
//   //   imageData.data[i+2] += l
//   // }

//   // 红色蒙版
//   // for (let i = 0; i < imageData.data.length; i+=4) {
//   //   const avg =  (imageData.data[i] + imageData.data[i+1]  + imageData.data[i+2] ) / 3
//   //   imageData.data[i] = avg
//   //   imageData.data[i+1] = 0
//   //   imageData.data[i+2] = 0
//   // }

//   // 透明度
//   // for (let i = 0; i < imageData.data.length; i+=4) {
//   //   imageData.data[i+3] = imageData.data[i+3] * 0.5
//   // }

//   const imageData2 = ctx.createImageData(300, 300)
//    for (let i = 0; i < 300 * 300 * 4; i+=4) {
//     imageData2.data[i] = 100
//     imageData2.data[i+1] = 100
//     imageData2.data[i+2] = 188
//     imageData2.data[i+3] = 255
//   }

//   // ctx.clearRect(0, 0, canvas.width, canvas.height)
//   ctx.putImageData(imageData2, 10, 10)
// }