const audio = new Audio("https://lasonotheque.org/UPLOAD/mp3/1417.mp3");
audio.play();
alphabet = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0");
letter_count = 0;
el = $("#loading");
word = el.html().trim();
finished = false;

el.html("");
for (var i = 0; i < word.length; i++) {
  el.append("<span>"+word.charAt(i)+"</span>");
}

setTimeout(write, 75);
incrementer = setTimeout(inc, 1000);

function write() {
  for (var i = letter_count; i < word.length; i++) {
    var c = Math.floor(Math.random() * 36);
    $("span")[i].innerHTML = alphabet[c];
  }
  if (!finished) {
    setTimeout(write, 75);
  }
}

function inc() {
  $("span")[letter_count].innerHTML = word[letter_count];
  $("span:eq("+letter_count+")").addClass("glow");
  letter_count++;
  if (letter_count >= word.length) {
    finished = true;
   
    
  } else {
    setTimeout(inc, 1000);
  }
}

function reset() {
  letter_count = 0;
  finished = false;
  setTimeout(inc, 1000);
  setTimeout(write, 75);
  $("span").removeClass("glow");
}

var canvas = document.getElementById("canvas");
		var ctx = canvas.getContext("2d");

		ctx.strokeStyle = '#00ffff';
		ctx.lineWidth = 17;
		ctx.shadowBlur= 15;
		ctx.shadowColor = '#00ffff'

		function degToRad(degree){
			var factor = Math.PI/180;
			return degree*factor;
		}

		function renderTime(){
			var now = new Date();
			var today = now.toDateString();
			var time = now.toLocaleTimeString();
			var hrs = now.getHours();
			var min = now.getMinutes();
			var sec = now.getSeconds();
			var mil = now.getMilliseconds();
			var smoothsec = sec+(mil/1000);
      var smoothmin = min+(smoothsec/60);

			//Background
			gradient = ctx.createRadialGradient(250, 250, 5, 250, 250, 300);
			gradient.addColorStop(0, "#03303a");
			gradient.addColorStop(1, "black");
			ctx.fillStyle = gradient;
			//ctx.fillStyle = 'rgba(00 ,00 , 00, 1)';
			ctx.fillRect(0, 0, 500, 500);
			//Hours
			ctx.beginPath();
			ctx.arc(250,250,200, degToRad(270), degToRad((hrs*30)-90));
			ctx.stroke();
			//Minutes
			ctx.beginPath();
			ctx.arc(250,250,170, degToRad(270), degToRad((smoothmin*6)-90));
			ctx.stroke();
			//Seconds
			ctx.beginPath();
			ctx.arc(250,250,140, degToRad(270), degToRad((smoothsec*6)-90));
			ctx.stroke();
			//Date
			ctx.font = "25px Helvetica";
			ctx.fillStyle = 'rgba(00, 255, 255, 1)'
			ctx.fillText(today, 175, 250);
			//Time
			ctx.font = "25px Helvetica Bold";
			ctx.fillStyle = 'rgba(00, 255, 255, 1)';
			ctx.fillText(time+":"+mil, 175, 280);

		}
		setInterval(renderTime, 40);
