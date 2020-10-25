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

const speed = 50;

const firstLine = document.querySelector('.first-line');
const secondLine = document.querySelector('.second-line');
const thirdLine = document.querySelector('.third-line');

let j = 0;
let txt2 = "> I'm a Fullstack Web Developer";

let k = 0;
let txt3 = "> I build web applications";

let l = 0;
let txt4 = "> I'm a teacher @ ";

let m = 0;
let txt5 = "Le Wagon Paris";

const typeWriter = () => {
    if (j < txt2.length) {
    firstLine.innerHTML += txt2.charAt(j);
    j++;
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
    thirdLine.innerHTML += "<a href=\"https://www.lewagon.com/Paris\">Le Wagon Paris</a>"
    m++;
    setTimeout(typeWriter, speed);
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
