import { scroll } from './javascript/scroll.js';
import { tabs } from './javascript/tabs.js';

scroll();
tabs();

const speed = 60;

const contactLink = document.getElementById('contact-link');

let n = 0;
let txt5 = "Get in touch";

let about_todo = true;
let portfolio_todo = true;

const typeWriter = () => {
    if (n < txt5.length) {
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
