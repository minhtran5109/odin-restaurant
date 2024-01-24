import startingComponent from './starting-page';
import homeComponent from './home-page';
import menuComponent from './menu-page';
import contactComponent from './contact-page';

startingComponent();
// console.log("Hey!!");
let content = document.querySelector("#content");

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const contactBtn = document.querySelector("#contact-btn");


function clearContent() {
    content.replaceChildren(content.firstElementChild);
}
homeBtn.addEventListener("click", ()=> {
    clearContent();
    homeComponent();
});

menuBtn.addEventListener("click", ()=> {
    clearContent();
    menuComponent();
});

contactBtn.addEventListener("click", ()=> {
    clearContent();
    contactComponent();
});
