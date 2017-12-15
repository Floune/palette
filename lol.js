var fireCount = 6;
var fireDelta = new Array();
var step = 0;
var f1 = 0;
var f2 = 0;
var ff1 = 0;
var ff2 = 0;

function animate1()
{
    fireDelta[fireCount - step] = Math.random() * 2 - 1;
    var e = document.getElementById("text2");
    var s = "";
    for (var i = 0; i < fireCount; i++)
    {
        if (s) s += ", ";
        s += Math.round(fireDelta[(i + fireCount - step) % fireCount] * i) + "px " + (-2 * i -1) + "px " + (2 + i) + "px ";
        s += "rgb(255, " + (255 - i * Math.floor(255 / (fireCount - 1))) + ", 0)";
    }
    e.style.textShadow = s;
    step = (step + 1) % fireCount;
}

function animate2()
{
    var w = document.getElementById("text3");
    
    if (f1<8){
      f1=f1+1;
      w.style.textShadow = "0 -"+(f1/10)+"em "+(f1/10)+"em rgba(50, 205, 50, "+(f1/2)+"), 0 "+(f1/10)+"em "+(f1/10)+"em rgba(255, 0, 0, "+(f1/2)+")";
      w.style.transform = "skewX("+f1*3+"deg)";
      if(f1==8){f2=f1;}
    } else if(f2<=8) {
      f2=f2-1;
      w.style.textShadow = "0 -"+(f2/10)+"em "+(f2/10)+"em rgba(50, 205, 50, "+(f2/2)+"), 0 "+(f2/10)+"em "+(f2/10)+"em rgba(255, 0, 0, "+(f2/2)+")";
      w.style.transform = "skewX("+f2*3+"deg)";
      if(f2==-2){f1=f2;}
    }
}

function start()
{
    for (var i = 0; i < fireCount; i++)
        fireDelta[i] = Math.random() * 2 - 1;
    window.setInterval(function() { animate1(); }, 100);
    window.setInterval(function() { animate2(); }, 150);
    return false;
}

start();