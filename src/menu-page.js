import './style.css';

const menuComponent = () => {
    const content = document.querySelector("#content");
    const menuContent = document.createElement('div');
    menuContent.setAttribute("id", "menu-content");

    menuContent.textContent = "Menu placeholder."

    content.appendChild(menuContent);
}

export default menuComponent;