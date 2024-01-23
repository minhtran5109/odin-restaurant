import './style.css';
import restaurant_pic from './restaurant.jpg';

const startingComponent = () => {
    const content = document.querySelector("#content");
    const header = document.createElement('div');
    header.setAttribute("id", "header");
    // header.textContent = "Hey!";

    const home = document.createElement('span');
    home.setAttribute("id", "home-btn");
    home.textContent = "Home";
    header.appendChild(home);

    const menu = document.createElement('span');
    menu.setAttribute("id", "menu-btn");
    menu.textContent = "Menu";
    header.appendChild(menu);

    const contact = document.createElement('span');
    contact.setAttribute("id", "contact-btn");
    contact.textContent = "Contact";
    header.appendChild(contact);

    const landingPicture = new Image();
    landingPicture.src = restaurant_pic;
    landingPicture.setAttribute("id","landing-img");

    const description = document.createElement('div');
    description.setAttribute("id", "description");
    description.textContent = "It's all about the food. We're on a mission to deliver food straight to your mouth."

    content.appendChild(header);
    content.appendChild(landingPicture);
    content.appendChild(description);
}

export default startingComponent;