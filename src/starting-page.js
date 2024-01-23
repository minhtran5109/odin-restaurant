const startingComponent = () => {
    const content = document.querySelector("#content");
    const header = document.createElement('div');
    header.setAttribute("id", "header");
    header.textContent = "Hey!";

    content.appendChild(header);
}

export default startingComponent;