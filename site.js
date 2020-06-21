
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
var Img=new Array; 
Img[0]="images/banner1.jpg"; 
Img[1]="images/banner2.jpg"; 
Img[2]="images/banner3.jpg"; 
Img[3]="images/banner4.jpg"; 
Img[4]="images/banner5.jpg"; 
Img[5]="images/banner6.jpg";
Img[6]="images/banner7.jpg"; 
Img[7]="images/banner8.jpg";
Img[8]="images/banner9.jpg"; 

var i=0;
 

function change(index) { 
document.getElementById('pic').src=Img[index]; 
i++; 
if (i < Img.length) 
{ 
setTimeout('change(i)',5500); }
else{i=0;setTimeout('change(i)',5500);}
 } 
setTimeout('change(i)',100);

$('.dropdown-submenu > a').on("click", function(e) {
    var submenu = $(this);
    $('.dropdown-submenu .dropdown-menu').removeClass('show');
    submenu.next('.dropdown-menu').addClass('show');
    e.stopPropagation();
});

$('.dropdown').on("hidden.bs.dropdown", function() {
    // hide any open menus when parent closes
    $('.dropdown-menu.show').removeClass('show');
});
/*$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
  if (!$(this).next().hasClass('show')) {
    $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
  }
  var $subMenu = $(this).next(".dropdown-menu");
  $subMenu.toggleClass('show');


  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
    $('.dropdown-submenu .show').removeClass("show");
  });


  return false;
});*/

