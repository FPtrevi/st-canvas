const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;
let isPainting = false;
function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.fill();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}
function startPainting() {
  isPainting = true;
}
function cancelPainting() {
  isPainting = false;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);




// const colors = [
//     "#f03e3e",
//     "#e64980",
//     "#be4bdb",
//     "#7950f2",
//     "#4c6ef5",
//     "#228be6",
//     "#15aabf",
//     "#12b886",
//     "#40c057",
//     "#82c91e",
//     "#fab005",
//     "#fd7e14"
// ]

// function onClick(event){
//     ctx.beginPath()
//     ctx.moveTo(0,0)
//     const color = colors[Math.floor(Math.random() * colors.length)]
//     ctx.strokeStyle = color
//     ctx.lineTo(event.offsetX, event.offsetY);
//     ctx.stroke();
    
// }

// canvas.addEventListener("mousemove", onClick);