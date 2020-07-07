function draw(){
  var canvas = document.getElementById('tutorial');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    for (var i=0; i<8; i++) {
      for (var j=0; j<8; j++) {
        ctx.beginPath();
        var x_start = 20 + 60 * i;
        var y_start = 20 + 60 * j;
        var x_end = 60
        var y_end = 60
        ctx.rect(x_start,y_start,x_end,y_end);
        ctx.stroke();
      }
    }
  }
}