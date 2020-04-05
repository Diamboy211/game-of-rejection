var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
let a = 0

function updateCanvas() {
  let b = (Math.sin(a/30)+1)*230
  a += game.guessers.amount
  ctx.fillStyle = "#FFFFFF"
  ctx.fillRect(0,0,400,100)
  ctx.fillStyle = "#DDDDFF"
  ctx.fillRect(b+70,30,100,40)
  ctx.fillRect(b+30,30,37,8)
  ctx.fillRect(b,40,67,8)
  ctx.fillRect(b+20,50,47,8)
  ctx.fillRect(b+40,60,27,8)
}

setInterval(updateCanvas, 1000/30)
