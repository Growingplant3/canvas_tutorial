function draw(){
  var canvas = document.getElementById('tutorial');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');
  
    for (var i = 0;i < 4;i++) {
      for(var j = 0;j < 3;j++) {
        ctx.beginPath();
        var x = 25 + j * 50; // x 座標
        var y = 25 + i * 50; // y 座標
        var radius = 20; // 円弧の半径
        var startAngle = 0; // 円孤の始点
        var endAngle = Math.PI + (Math.PI * j) / 2; // 円孤の終点
        var anticlockwise = i % 2 !== 0; // 時計回りまたは反時計回り

        ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

        if (i > 1){
          ctx.fill();
        } else {
          ctx.stroke();
        }
      }
    }
  }
}