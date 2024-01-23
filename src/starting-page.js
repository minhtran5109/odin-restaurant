import './style.css';

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

    content.appendChild(header);
}

export default startingComponent;