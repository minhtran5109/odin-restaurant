import './style.css';
const menu = [
    {
        name: "PASTA-OH",
        description:"PASTA, TOMATO SAUCES, BASIL",
        price: 15.50
    },
    {
        name: "STEAK-OH",
        description:"T-BONE STEAK, GRAVY. COMES W/ FRIES",
        price: 21.50
    },    
    {
        name: "CHICKEN-OH",
        description:"CHICKEN TENDER, PARMESAN",
        price: 13.50
    },
]

const menuComponent = () => {
    const content = document.querySelector("#content");
    const menuContent = document.createElement('div');
    menuContent.setAttribute("id", "menu-content");

    // menuContent.textContent = "Menu placeholder."
    menu.forEach((item) => {
        const itemName = document.createElement('h1');
        itemName.textContent = `${item.name}`;
        const itemPrice = document.createElement('span');
        itemPrice.classList.add("price");
        itemPrice.textContent = `\$${item.price}`
        itemName.appendChild(itemPrice);

        const itemDescription = document.createElement('p');
        itemDescription.classList.add('item-description');
        itemDescription.textContent = `${item.description}`;
        
        menuContent.appendChild(itemName);
        menuContent.appendChild(itemDescription);
        menuContent.appendChild(document.createElement('hr'));
    })

    content.appendChild(menuContent);
}

export default menuComponent;