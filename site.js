
$(window).scroll(function(){
  if ($(window).scrollTop() == 0) {
    $(".navbar").removeClass("fixed-top");
  } else {
    $(".navbar").addClass("fixed-top");
  }
});

function passWord() {
var testV = 1;
var pass1 = prompt('Veuillez entrer le mot de passe',' ');
while (testV < 10) {
if (!pass1) 
history.go(-1);
if (pass1.toLowerCase() == "gialongparis75") {
window.location="content/TrangChinh.html";
break ;
} 
testV+=1;
var pass1 = 
prompt('Accès interdit - Mot de passe incorrect. Veuillez réessayer.','Mot de passe');
}
if (pass1.toLowerCase()!="gialongparis75" & testV ==10) 
history.go(-1);
return " ";
} 

//Identifier d'abord la vidéo dans le DOM
function toggleMute() {
	var myVideo = document.getElementById("videoId");
	myVideo.controls = true;
	myVideo.play();
	
}

$(document).ready(function(){
  setTimeout(toggleMute,2500);

}) 
var message="";
///////////////////////////////////
function clickIE() {if (document.all) {(message);return false;}}
function clickNS(e) {if
(document.layers||(document.getElementById&&!document.all)) {
if (e.which==2||e.which==3) {(message);return false;}}}
if (document.layers)
{document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;}
else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;}
document.oncontextmenu=new Function("return false")


function unmutedplay(idPlayer, control) {
    var player = document.querySelector('#' + idPlayer);
  player.muted = false;
  control.hidden = true;

} 
