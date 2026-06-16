console.log("Portfolio Loaded Successfully");
const words = [

    "Networking",
    "Cloud Computing",
    "Data Analytics"

];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const text = document.querySelector(".typing-text span");

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!isDeleting){

        text.textContent =
        currentWord.substring(0,charIndex+1);

        charIndex++;

        if(charIndex === currentWord.length){

            isDeleting = true;

            setTimeout(typeEffect,1500);

            return;
        }

    }else{

        text.textContent =
        currentWord.substring(0,charIndex-1);

        charIndex--;

        if(charIndex === 0){

            isDeleting = false;

            wordIndex++;

            if(wordIndex === words.length){

                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect,isDeleting ? 60 : 100);
}

typeEffect();

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

    reveals.forEach((element)=>{

        const windowHeight =
        window.innerHeight;

        const revealTop =
        element.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            element.classList.add("active");

        }
    });

});

const menuToggle =
document.querySelector(".menu-toggle");

const navLinks =
document.querySelector(".nav-links");

menuToggle.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});

document
.querySelectorAll(".nav-links a")
.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop =
        section.offsetTop - 150;

        const sectionHeight =
        section.clientHeight;

        if(pageYOffset >= sectionTop){

            current =
            section.getAttribute("id");
        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(
        link.getAttribute("href")
        === `#${current}`
        ){

            link.classList.add("active");
        }

    });

});

const backToTop =
document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"
    });

});

const glow =
document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

    glow.style.left =
    e.clientX + "px";

    glow.style.top =
    e.clientY + "px";

});

const particles =
document.getElementById("particles");

for(let i=0;i<30;i++){

    const particle =
    document.createElement("span");

    particle.classList.add("particle");

    particle.style.left =
    Math.random()*100 + "%";

    particle.style.animationDuration =
    (8 + Math.random()*12) + "s";

    particles.appendChild(particle);
}
function updateClock(){

    const now =
    new Date();

    const time =
    now.toLocaleTimeString(
    "en-IN",
    {
        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit"
    });

    document
    .getElementById("clock")
    .innerText = time;
}

setInterval(updateClock,1000);

updateClock();
