var tzoffset = 1;

function itime(){
  /* Code go brrrrrrrrrrrrrr...*/
  currdatetime = new Date()
  currseconds = currdatetime.getSeconds()
  currminutes = currdatetime.getMinutes()
  currhours = currdatetime.getHours()-tzoffset;
  currmilliseconds = currdatetime.getMilliseconds()
  return ((currhours*3600+currminutes*60+currseconds+currmilliseconds/1000) / 86.4);
}



var i;
for (i = 0; i < 10; i++) {
  var newDiv = document.createElement("div");
  newDiv.className = "rolling-number rolling-number-"+String(i);
  newDiv.innerHTML = "0<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>@<br>.";
  document.getElementsByClassName("time")[0].appendChild(newDiv);
}

setInterval(function(){
  var currtimestring = "@"+(Math.round(itime() * 10000) / 10000).toFixed(4).padStart(9, '0');
  for (i = 0; i < 10; i++) {

      document.getElementsByClassName("rolling-number")[i].style = "transform: translateY(-"+String(120*parseInt(currtimestring[i].replaceAll("@","10").replaceAll(".","11")))+"px);";
  }
},300)
