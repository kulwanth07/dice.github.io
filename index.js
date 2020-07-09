var randomNumber1=Math.floor(Math.random()*6+1);
var randomImage1="images/"+"dice"+randomNumber1+".png";
var image1=document.querySelectorAll(".img1");
image1[0].setAttribute("src",randomImage1);

var randomNumber2=Math.floor(Math.random()*6+1);
var randomImage2="images/"+"dice"+randomNumber2+".png";
var image2=document.querySelectorAll(".img2");
image2[0].setAttribute("src",randomImage2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").style.fontSize="50px";
    document.querySelector("h1").innerHTML="💥INDIA wins!";
}  
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").style.fontSize="50px";
    document.querySelector("h1").innerHTML="💥CORONA wins!";
}  
else if(randomNumber1=randomNumber2){
    document.querySelector("h1").style.fontSize="50px";
    document.querySelector("h1").innerHTML="Draw😮,refresh again!";
}  
