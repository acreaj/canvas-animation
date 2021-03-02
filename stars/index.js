const canvas = document.getElementById('canvas')

// 设置画布的宽高
let width = document.body.clientWidth
let height = document.body.clientHeight

canvas.width = width
canvas.height = height

const ctx = canvas.getContext('2d')

ctx.strokeStyle = 'rgba(255,255,255,.3)'
ctx.fillStyle = "white"

let starsArr = []

for ( let i = 0; i < 50; i++ ) {
  let sglestar = new star(ctx,Math.round(Math.random()*width),Math.round(Math.random()*height),1,Math.random(),Math.random())
  starsArr.push(sglestar)
}

// function animation() {
//   ctx.clearRect(0,0,width,height)

//   // star移动
//   starsArr.forEach((sglestar) => {
//     sglestar.drawStar()
//     sglestar.moveStar()
//     // 检测是否到达边界
//     if ( sglestar.x > width || sglestar.x < 0) {
//       sglestar.speedx *= -1
//     }

//     if ( sglestar.y > height || sglestar.y < 0) {
//       sglestar.speedy *= -1
//     }
//   })

//   // star连线
//   starsArr.forEach((sglestar,index,allstar) => {
//     for ( let i = 0; i < starsArr.length ;i++ ) {
//       if ( i != index ) {
//         drawLine(ctx,sglestar.x,sglestar.y,starsArr[i].x,starsArr[i].y)
//       }
//     }
//   })
//   window.requestAnimationFrame(animation)
// }
// window.requestAnimationFrame(animation)

// 跟随鼠标移动
let mousestar = new star(ctx, 0 , 0 , 1 ,Math.random(),Math.random())
setInterval(()=>{
  ctx.clearRect(0,0,width,height)

  mousestar.drawStar()
  // star移动
  starsArr.forEach((sglestar) => {
    sglestar.drawStar()
    sglestar.moveStar()
    // 检测是否到达边界
    if ( sglestar.x > width || sglestar.x < 0) {
      sglestar.speedx *= -1
    }

    if ( sglestar.y > height || sglestar.y < 0) {
      sglestar.speedy *= -1
    }
  })

  // star连线
  starsArr.forEach((sglestar,index,allstar) => {
    for ( let i = 0; i < starsArr.length ;i++ ) {
      if ( i != index ) {
        drawLine(ctx,sglestar.x,sglestar.y,starsArr[i].x,starsArr[i].y)
      }
    }

    drawLine(ctx,mousestar.x,mousestar.y,sglestar.x,sglestar.y,100)
  })
  
},30)

function drawLine(ctx,x1,y1,x2,y2,dis=50){
  if ( Math.abs(x1 - x2) < dis && Math.abs(y1 - y2) < dis) {
    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    ctx.stroke()
    ctx.closePath()
  }
}


window.onresize = (_) => {
  width = document.body.clientWidth
  height = document.body.clientHeight
  canvas.width = width
  canvas.height = height
}

// 鼠标移动
window.onmousemove = (e) => {
  mousestar.x = e.clientX
  mousestar.y = e.clientY
}

window.onclick = (e) => {
  for (let i = 0 ; i < 5; i++ ){
    starsArr.push(new star(ctx,e.clientX,e.clientY,1,Math.random(),Math.random()))
    starsArr.shift()
  }
}