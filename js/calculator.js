$(function () {

 const $dropdownList = document.querySelector(".calculator-boxes-box-right-dropdown-list");
 const $dropdownBtn = document.querySelector(".calculator-boxes-box-right-dropdown-btn");
 const $dropdownSpan = document.querySelector(".calculator-boxes-box-right-dropdown-span");

 const $dropdownLiList = $dropdownList.querySelectorAll("li");

 $dropdownBtn.addEventListener("click", function(e)
 {
     e.preventDefault();
     $dropdownList.classList.toggle("visible-dropdown-list");
     $dropdownBtn.classList.toggle("rotate-btn");
 });

 for (i = 0; i < $dropdownLiList.length; i++)
 {
     $dropdownLiList[i].addEventListener("click", function(e)
     {
         $dropdownSpan.innerText = e.target.innerText;
     });
 }




});