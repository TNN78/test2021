
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


