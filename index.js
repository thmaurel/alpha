import { scroll } from './javascript/scroll.js';
import { tabs } from './javascript/tabs.js';

scroll();
tabs();


// console.log("Hello");
// setTimeout(() => {
//   console.log("World!");
//   document.querySelector('.tab-portfolio').style.display = "block";
// }, 2000);

// setTimeout(() => {
//   console.log("World!");
//   document.querySelector('.tab-contact').style.display = "block";
// }, 4000);

const speed = 30;

const firstLine = document.querySelector('.first-line');
const secondLine = document.querySelector('.second-line');
const thirdLine = document.querySelector('.third-line');
const contactLink = document.getElementById('contact-link');

let j = 0;
let txt2 = "> I'm a Fullstack Web Developer";
let j2 = 0;

let k = 0;
let txt3 = "> I build web applications";

let l = 0;
let txt4 = "> I'm a teacher @ Le Wagon Paris";

let m = 0;

let n = 0;
let txt5 = "Get in touch";

let about_todo = true;
let portfolio_todo = true;

const typeWriter = () => {
    if (j < txt2.length) {
    firstLine.innerHTML += txt2.charAt(j);
    j++;
    setTimeout(typeWriter, speed);
  } else if (j2 === 0) {
    firstLine.innerHTML = "> I'm a <strong class=\"blue\">Fullstack Web Developer</strong>";
    j2++;
    setTimeout(typeWriter, speed);
  } else if (k < txt3.length) {
    secondLine.innerHTML += txt3.charAt(k);
    k++;
    setTimeout(typeWriter, speed);
  } else if (l < txt4.length) {
    thirdLine.innerHTML += txt4.charAt(l);
    l++;
    setTimeout(typeWriter, speed);
  } else if (m === 0) {
    thirdLine.innerHTML = "> I'm a teacher @ <a href=\"https://www.lewagon.com/Paris\">Le Wagon Paris</a>";
    m++;
    setTimeout(typeWriter, speed);
  } else if (n < txt5.length) {
    contactLink.innerHTML += txt5.charAt(n);
    n++;
    setTimeout(typeWriter, speed);
  } else if (about_todo) {
    document.querySelector('.tab-about').style.display = "block";
    about_todo = false;
    setTimeout(typeWriter, 1000)
  } else if (portfolio_todo) {
    document.querySelector('.tab-portfolio').style.display = "block";
    portfolio_todo = false;
    setTimeout(typeWriter, 1000)
  } else {
    document.querySelector('.tab-contact').style.display = "block";
  }
}

typeWriter();

// console.log(document.querySelector('.tab-about').style.position)

// const tab = () => {
//   const tabAbout = document.querySelector('.tab-about');
//   let n = -250;
//   if (n < 0) {
//     n++
//     tabAbout.style.left = `${n}px`
//     console.log("+1");
//   } else {
//     clearInterval(tab1);
//     console.log("clear")
//   }

// }

// const tab1 = setInterval(tab, 100);
