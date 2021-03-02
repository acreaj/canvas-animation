class star {
  constructor(ctx,x,y,r,speedx,speedy) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.r = r
    this.speedx = speedx
    this.speedy = speedy
  }

  drawStar(){
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2,true)
    this.ctx.fill()
    this.ctx.closePath()
  }

  moveStar(){
    this.x -= this.speedx
    this.y -= this.speedy
  }
}