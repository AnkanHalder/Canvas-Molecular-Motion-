var canvas =document.querySelector('canvas');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c=canvas.getContext('2d');
 c.fillStyle='orange';
 var circlearray=[];


function Circle(x,y,dx,dy,r){
  this.x=x;
  this.y=y;
  this.dx=dx;
  this.dy=dy;
  this.r=r;

  this.draw=function(){
    c.beginPath();
    c.arc(this.x,this.y,this.r,0,Math.PI*2,false);
    c.strokeStyle="purple";
    c.stroke();
    c.fill();
  }
  this.conditions=function(){
    if((innerWidth<this.x+this.r)||(this.x-this.r<0)){
      this.dx=-this.dx;
    }
    if((innerHeight<this.y+this.r)||(this.y-this.r<0)){
      this.dy=-this.dy;
    }
    this.x+=this.dx;
    this.y+=this.dy;
  }
}

for(var i=0;i<100;i++){
  var r=20;
  var x=Math.random()*(innerWidth-2*r)+r;
  var y=Math.random()*(innerHeight-2*r)+r;
  var dy=(Math.random()-.5)*10;
  var dx=(Math.random()-.5)*10;

circlearray.push(new Circle(x,y,dx,dy,r));
}

function animate(){
  requestAnimationFrame(animate);
  c.clearRect(0,0,innerWidth,innerHeight);
for(var i=0;i<circlearray.length;i++){
  circlearray[i].draw();
  circlearray[i].conditions();
}

}
animate();
