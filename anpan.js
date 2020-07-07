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
    ctx.moveTo(90,40);
    ctx.ellipse(73,60,20,40,0,Math.PI*11/6,Math.PI*9/8,true);
    ctx.moveTo(110,40);
    ctx.ellipse(127,60,20,40,0,Math.PI*7/6,Math.PI*15/8);
    ctx.moveTo(60,130);
    ctx.ellipse(100,130,40,30,0,0,Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(80,45);
    ctx.ellipse(80,65,10,20,0,Math.PI*3/2,Math.PI*7/2);
    ctx.moveTo(120,45);
    ctx.ellipse(120,65,10,20,0,Math.PI*3/2,Math.PI*7/2);
    ctx.fill();

    ctx.strokeRect(95,95,10,10);
    ctx.strokeRect(55,95,10,10);
    ctx.strokeRect(135,95,10,10);

  }
}