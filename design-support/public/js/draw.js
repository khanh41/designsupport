
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
  document.getElementById("btn-done").removeAttribute("disabled");
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
  let arr = document.getElementsByClassName("reset");
  for (let i = 0; i < arr.length; i++) {
    arr[i].classList.remove("border-draw");
  }
  document.getElementById("btn-done").removeAttribute("disabled");
  event.target.removeAttribute("class");
  event.target.setAttribute("class", "border-draw reset");
  var canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(event.target, 350, 150);
}

const uploadFile = (event) => {
  const urlImg = 'https://images.unsplash.com/photo-1588080064985-cb6ae38645bc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max';

  var storageRef = firebase.storage().ref();
  storageRef.child(urlImg);

}