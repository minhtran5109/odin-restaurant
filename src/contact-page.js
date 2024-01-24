import './style.css';

const contactComponent = () => {
    const content = document.querySelector("#content");
    const contactContent = document.createElement('div');
    contactContent.setAttribute("id", "contact-content");

    contactContent.textContent = "Contact Placeholder.";

    content.appendChild(contactContent);
}

export default contactComponent;