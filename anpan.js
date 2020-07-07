function draw(){
  var canvas = document.getElementById('tutorial');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.arc(100,100,90,0,Math.PI*2); // 外円
    ctx.moveTo(50,100);
    ctx.arc(100,100,30,0,Math.PI*2);

    ctx.stroke();
  }
}