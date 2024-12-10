"use strict"
const iconfirst = document.querySelector(".boxs i:nth-child(1)");
const iconsecond = document.querySelector(".boxs i:nth-child(2)");
const icon3 = document.querySelector(".boxs i:nth-child(3)");
const spanfirst = document.querySelector(".boxs-span span:nth-child(1)");
const spansecond = document.querySelector(".boxs-span span:nth-child(2)");
const span3 = document.querySelector(".boxs-span span:nth-child(3)");
const set=document.querySelector(".icon i");
const color=document.querySelector(".color") 
const colorfirst=document.querySelector(".color p:nth-child(1)");
const colorsecond=document.querySelector(".color p:nth-child(2)")
const color3=document.querySelector(".color p:nth-child(3)")



iconfirst.addEventListener("click", function () {
    spanfirst.classList.toggle("active");
})

iconsecond.addEventListener("click", function () {
    spansecond.classList.toggle("active");
})


icon3.addEventListener("click", function () {
    span3.classList.toggle("active");
})



set.addEventListener("click",function(){
color.classList.toggle("active");
})


colorfirst.addEventListener("click",function(){
    header.style.backgroundColor = "#1DA282";
})


colorsecond.addEventListener("click",function(){
    header.style.backgroundColor = "#FF3FB3";
})


color3.addEventListener("click",function(){
    header.style.backgroundColor = "orange";
})





