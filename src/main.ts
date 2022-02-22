window.onload = () => {
  const canvas = document.querySelector<HTMLCanvasElement>("#canvas") || new HTMLCanvasElement();
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  console.log(canvas.toDataURL());
}

