var canvas = document.getElementById('canvas');
canvas.width = 800;
canvas.height = 450;
const context = canvas.getContext('2d');

let drawing = false;
let startPoint = [0, 0];

canvas.addEventListener('mousedown', handleMouseDown);
canvas.addEventListener('mousemove', handleMouseMove);
document.addEventListener('mouseup', handleMouseUp);

function getPointOfCanvas(event) {
  const { x, y } = canvas.getBoundingClientRect();
  const { pageX, pageY } = event;
  return [pageX - x, pageY - y];
}

function handleMouseDown(event) {
  drawing = true;
  startPoint = getPointOfCanvas(event);
}

function handleMouseUp() {
  drawing = false;
  startPoint = [0, 0];
}

function handleMouseMove(event) {
  // không làm gì nếu chưa trong tiến trình vẽ
  if (!drawing) return;
  const nextPoint = getPointOfCanvas(event);
  context.beginPath();
  context.moveTo(...startPoint);
  context.lineTo(...nextPoint);
  context.stroke();
  context.closePath();
  // B sẽ trở thành điểm bắt đầu
  startPoint = [...nextPoint];
}

// handle event click image support

const handleClickSupport = (event) => {
  console.log(event.target);
}