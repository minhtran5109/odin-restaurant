import './style.css';

const homeComponent = () => {
    const content = document.querySelector("#content");
    const homeContent = document.createElement('div');
    homeContent.setAttribute("id", "home-content");

    homeContent.textContent = "MAJOR-OH.\nIt's all about the food. We're on a mission to deliver food straight to your mouth."

    content.appendChild(homeContent);
}

export default homeComponent;