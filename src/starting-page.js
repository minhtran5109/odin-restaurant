import './style.css';
import homeComponent from './home-page';

const startingComponent = () => {
    const content = document.querySelector("#content");
    const header = document.createElement('nav');
    header.setAttribute("id", "header");
    // header.textContent = "Hey!";

    const home = document.createElement('span');
    home.setAttribute("id", "home-btn");
    home.classList.add("header-btn");
    home.textContent = "Home";
    header.appendChild(home);

    const menu = document.createElement('span');
    menu.setAttribute("id", "menu-btn");
    menu.classList.add("header-btn");
    menu.textContent = "Menu";
    header.appendChild(menu);

    const contact = document.createElement('span');
    contact.setAttribute("id", "contact-btn");
    contact.classList.add("header-btn");
    contact.textContent = "Contact";
    header.appendChild(contact);

    // const landingPicture = new Image();
    // landingPicture.src = restaurant_pic;
    // landingPicture.setAttribute("id","landing-img");

    // const description = document.createElement('div');
    // description.setAttribute("id", "description");
    // description.textContent = "random text";

    content.appendChild(header);
    homeComponent();
    // content.appendChild(landingPicture);
    // content.appendChild(description);
}

export default startingComponent;