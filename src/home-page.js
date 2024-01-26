import './style.css';

const homeComponent = () => {
    const content = document.querySelector("#content");
    const homeContent = document.createElement('div');
    homeContent.setAttribute("id", "home-content");

    const name = document.createElement('h1');
    name.textContent = "MAJOR-OH";
    const text = document.createElement('p')
    text.textContent = "It's all about the food. We're on a mission to deliver food straight to your mouth."

    homeContent.appendChild(name);
    homeContent.appendChild(text);

    content.appendChild(homeContent);
}

export default homeComponent;