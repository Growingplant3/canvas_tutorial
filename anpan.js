function draw(){
  var canvas = document.getElementById('tutorial');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.arc(100,100,90,0,Math.PI*2,true); // 外円
    ctx.moveTo(120,100);
    ctx.arc(100,100,20,0,Math.PI*2,true);
    ctx.moveTo(60,80);
    ctx.arc(60,100,20,Math.PI*3/2,Math.PI/2,false);
    ctx.moveTo(140,80);
    ctx.arc(140,100,20,Math.PI*3/2,Math.PI/2,true);
    ctx.stroke();
  }
}