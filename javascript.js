const container = document.querySelector('.container');
const card = document.querySelector(".card");

const title = document.querySelector(".title h3");
const img = document.querySelector(".img img")
const description =document.querySelector(".description p");
const button = document.querySelector(".buttons ")
const purchase =document.querySelector(".buyer button")


container.addEventListener('mousemove' ,  (e)=>{

    let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
    let yAxis = (window.innerWidth / 4 - e.pageY) / 25;

    card.style.transform =`rotateY(${yAxis}deg) rotateX(${xAxis}deg)`; 
} );

container.addEventListener('mouseenter', (e)=>{
    card.style.transition ="none";
    title.style.transform = "translateZ(150px)";
    description.style.transform = "translateZ(125px)";
    button.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)"

    img.style.transform = "translateZ(150px)  rotateZ(35deg)"

})

container.addEventListener('mouseleave', (e)=>{
    card.style.transition ="all 0.5s ease"

    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    description.style.transform = "translateZ(0px)";
    title.style.transform = "translateZ(0px)"
    button.style.transform = "translateZ(0px)"
    purchase.style.transform = "translateZ(0px)"
    
    img.style.transform = "translateZ(0px)  rotateZ(0deg)"


})


