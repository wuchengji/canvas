const canvas =
  document.querySelector<HTMLCanvasElement>("#canvas") ||
  new HTMLCanvasElement();
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
const ball = { x: 1, y: 2, width: 1, height: 1, radius: 2}
if (ball.x < ball.radius) {
  //小球“碰到”左边界时
} else if (ball.x > canvas.width - ball.radius) {
  //小球“碰到”右边界时
}
if (ball.y < ball.radius) {
  //小球“碰到”上边界时
} else if (ball.y > canvas.height - ball.radius) {
  //小球“碰到”下边界时
}
