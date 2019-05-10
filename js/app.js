const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("control_color");
const range = document.getElementById("jsRange");
canvas.width = 700;
canvas.height = 700;
ctx.strokeStyle = "black"
ctx.lineWidth = 2.5;
let painting = false;

function stopPainting () {
  painting = false;

}
function startPainting () {
  painting = true;
}
function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if(!painting){
    ctx.beginPath();
    ctx.moveTo(x, y);

  } else {
    ctx.lineTo(x,y);
    ctx.stroke();
  }
}
function handleRange (event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}
function handleColors(event){
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
}
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}
Array.from(colors).forEach(colors => colors.addEventListener("click",handleColors));

if (range){
  range.addEventListener("input", handleRange);
}
