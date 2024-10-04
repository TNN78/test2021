
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
var timeoutID;
function toggleMute() {
	var myAudio = document.getElementById("audio");
  var myBtnSon = document.getElementById("hautparleur");
  clearTimeout(timeoutID);
	myAudio.load();
  myAudio.play();
  if (myAudio.paused)
    { location.reload(true);
      myAudio.load();
      myAudio.play();}
  else {myBtnSon.hidden = true;
    myAudio.hidden = false;
    myAudio.muted = false;
  }
}

$(document).ready(function(){
  //timeoutID=setTimeout(toggleMute,2500);

})
var message="";
///////////////////////////////////
/*function clickIE() {if (document.all) {(message);return false;}}
function clickNS(e) {if
(document.layers||(document.getElementById&&!document.all)) {
if (e.which==2||e.which==3) {(message);return false;}}}
if (document.layers)
{document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;}
else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;}
document.oncontextmenu=new Function("return false")*/

function SelVideo(indMenu) {
        var myAudio = document.getElementById("audio");
        var myBtnSon = document.getElementById("hautparleur");
        var myImg = document.getElementById("imgtt");
        //var myTit1 = document.getElementById("titreVideo1");
        //var myVideo1 = document.getElementById("video1");
        //myAudio.hidden = false;
        //myBtnSon.hidden = true;
        myAudio.muted = false;
        myAudio.hidden = true;
        myAudio.controls = false;
        myBtnSon.hidden = false;
        //myvideo1.controls = true;
        switch(indMenu) {
            case 1:
           	//myImg.hidden = false;
              myAudio.hidden = true;
              myAudio.controls = false;
              myBtnSon.hidden = true;
              myAudio.pause();
            	myImg.src='../HinhAnh/Vidéo_vnss.jpg';
            	//myVideo1.hidden = true;
              //myTit1.hidden = true;
              break;
            case 2:
             	//myImg.hidden = false;
            	//myVideo1.hidden = true;
              myBtnSon.hidden = false;
             	myImg.src='../HinhAnh/PARIS.gif';
              //myTit1.hidden = true;
              break;
            case 3:
              myAudio.hidden = true;
              myAudio.controls = false;
              myBtnSon.hidden = true;
              myAudio.pause();
	            //myImg.hidden = false;
  	          //myVideo1.hidden = true;
             	myImg.src='../HinhAnh/HopBTC1.jpg';
              //myTit1.hidden = true;
              break;
             /*case 4:
            	myVideo1.hidden = false;
            	myImg.hidden = true;
              myTit1.hidden = false;
              myvideo1.play();
              myvideo1.controls = false;
              break;*/
       }
    }
function SelThongTin(indMenu) {
        var myImg = document.getElementById("imgtt");
        switch(indMenu) {
            case 101:
              myImg.src='images/ThuNgoĐHGLT10.jpg';
              break;
            case 102:
              myImg.src='images/ThuNgoHT2023.jpg';
              break;
            case 23:
              myImg.src='images/HoaiNiemGsTonThatThien.jpg';
              break;
            case 22:
              myImg.src='HinhAnh/Vidéo_vnss.jpg';
              break;
            case 21:
              myImg.src='images/ThongBaoHDH_09-2024.jpg';
              break;
            case 20:
              myImg.src='images/TinGioChot.jpg';
              break;
            case 19:
              myImg.src='images/ThongBao_09-2024.jpg';
              break;
            case 18:
              myImg.src='images/ThongBao_08-2024.jpg';
              break;
            case 17:
              myImg.src='images/ThongBao_07-2024.jpg';
              break;
          case 16:
              myImg.src='images/ThongBao_06-2024.jpg';
              break;
            case 15:
              myImg.src='images/ThongBao_05-2024.jpg';
              break;
            case 14:
              myImg.src='images/ThongBao_04-2024.jpg';
              break;
            case 13:
              myImg.src='HinhAnh/NhaHangPhap.jpg';
              break;
            case 12:
              myImg.src='images/ThongBao_03-2024.jpg';
              break;
            case 11:
              myImg.src='images/ThiepTet2024.jpg';
              break;
            case 1:
              myImg.src='images/ThongBao_03-2023.jpg';
              break;
            case 2:
              myImg.src='images/ThongBao_05-2023.jpg';
              break;
            case 3:
              myImg.src='images/ThongBao_06-2023.jpg';
              break;
            case 4:
              myImg.src='images/ThongBao_07-2023.jpg';
              break;
            case 5:
              myImg.src='images/ThongBao_08-2023.jpg';
              break;
            case 6:
              myImg.src='images/ThongBao_09-2023.jpg';
              break;
            case 7:
              myImg.src='images/ThongBao_10-2023.jpg';
              break;
            case 8:
              myImg.src='images/ThongBao_11-2023.jpg';
              break;
            case 9:
              myImg.src='images/ThongBao_12-2023.jpg';
              break;
            case 10:
              myImg.src='images/ThongBao_01-2024.jpg';
              break;

        }
    }
    function SelNienKhoa(indMenu) {
        var myImg = document.getElementById("imgtt");
        switch(indMenu) {
                case 1:
                  myImg.src='../GhiDanh/DSCNuSinh1950-1969.jpg';
                  break;
                case 2:
                  myImg.src='../GhiDanh/DSCNuSinh1970-1972.jpg';
                  break;
                case 3:
                  myImg.src='../GhiDanh/DSCNuSinh1973-1974.jpg';
                  break;
                case 4:
                  myImg.src='../GhiDanh/DSCNuSinh1975-1979.jpg';
                  break;
                case 5:
                  myImg.src='../GhiDanh/DSCNuSinh1980.jpg';
                  break;
            }
        }

function unmutedplay(idPlayer, control) {
    var player = document.querySelector('#' + idPlayer);
  player.muted = false;
  control.hidden = true;

}
function playAudio() {
        var myAudio = document.getElementById("audio");
        var myvideo1 = document.getElementById("video1");
        var myBtnSon = document.getElementById("hautparleur");
        myAudio.volume = 0.5;
        myAudio.hidden = false;
        myAudio.controls = true;
        myBtnSon.hidden = true;
        myAudio.play();
        myvideo1.play();
        myvideo1.controls = false;
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
var vPausePlay = document.getElementsByClassName("play_commands");
var slideIndex = 0;
var slideInterval = setInterval(carousel,8000);

carousel();

function carousel() {
  var i;
  var slides = document.getElementsByClassName("custom-slider");
  var dots = document.getElementsByClassName("dot");
 for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
    pauseSlideshow();
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("custom-slider");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
function playSlideshow(){
  vPausePlay[0].style.opacity = 1;
  vPausePlay[1].style.opacity = 0;
  slideInterval = setInterval(carousel,8000);
  carousel();
}
function pauseSlideshow(){
  vPausePlay[0].style.opacity = 0;
  vPausePlay[1].style.opacity = 1;
  clearInterval(slideInterval);
}
