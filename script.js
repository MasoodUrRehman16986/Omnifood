console.log("Hello world");

const myName ="Naveed";
const h1 =document.querySelector(".heading-primary");
console.log(h1);
console.log(myName);



//  h1.addEventListener('click', function(){
//     h1.textContent = myName;
//     h1.style.backgroundColor = "red";
//     h1.style.padding = "5rem";
//  });



// set current year
 const yearEl = document.querySelector(".year")
 const currentYear = new Date().getFullYear();
 yearEl.textContent=currentYear;

//  make mobile nav work  
const navBtnEl = document.querySelector(".btn-mobile-nav")
const headerEl = document.querySelector(".header1")
navBtnEl.addEventListener("click", function () {
headerEl.classList.toggle("nav-open")

});

// Smooth Scrolling Animation

const allLinks= document.querySelectorAll('a:link');
console.log(allLinks)

allLinks.forEach(function(link)){
    link.addEventListener
    
}

























