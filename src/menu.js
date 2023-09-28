import pizza1 from './images/pizzas/pizza1.png';
import pizza2 from './images/pizzas/pizza2.png';
import pizza3 from './images/pizzas/pizza3.png';
import pizza4 from './images/pizzas/pizza4.png';
import pizza5 from './images/pizzas/pizza5.png';
import pizza6 from './images/pizzas/pizza6.png';
import pizza7 from './images/pizzas/pizza7.png';
import pizza8 from './images/pizzas/pizza8.png';
import pizza9 from './images/pizzas/pizza9.png';

export default function Menu() {
    const main = document.querySelector(".main");
    main.classList.add("menu");

    const menuContainer = document.createElement('div');
    menuContainer.classList.add("menuContainer");
    main.appendChild(menuContainer);

    // Create pizzaContainer, pizzaImg, pizzaName, and pizzaDescription elements inside the function
    function createPizzaElement(imageSrc, pizzaNameText, pizzaDescriptionText) {
        const pizzaContainer = document.createElement('div');
        pizzaContainer.classList.add("pizzaContainer");

        const pizzaImg = document.createElement('img');
        pizzaImg.classList.add("pizzaImg");
        pizzaImg.src = imageSrc; // Set the image source

        const pizzaName = document.createElement('h3');
        pizzaName.classList.add("pizzaName");
        pizzaName.innerHTML = pizzaNameText;

        const pizzaDescription = document.createElement('p');
        pizzaDescription.classList.add("pizzaDescription");
        pizzaDescription.innerHTML = pizzaDescriptionText;

        const pizzaOrderBtn = document.createElement('button');
        pizzaOrderBtn.classList.add("pizzaOrderBtn");
        pizzaOrderBtn.innerHTML = "Order"

        appendContainer(pizzaContainer, pizzaImg, pizzaName, pizzaDescription, pizzaOrderBtn);
    }

    // Margherita
    createPizzaElement(pizza1, "Margherita", "Plain Tomato Base with Mozarella Cheese");

    // Tomato & Mushroom
    createPizzaElement(pizza2, "Tomato & Mushroom", "Tomato, Olives and Sliced Tomatoes");

    // Pepperoni
    createPizzaElement(pizza3, "Pepperoni", "Classic Pepperoni with Mozarella Cheese");

    // Meat Supreme
    createPizzaElement(pizza4, "B-T-O", "Bacon, Tomato and Olives");

    // Hawaain
    createPizzaElement(pizza5, "Hawaiian", "Yes, Pineapple Belongs on Pizza");

    // Seafood
    createPizzaElement(pizza6, "Seafood", "Arrr, a Pirates Treat for Me!");

    // Vegetarian
    createPizzaElement(pizza7, "Vegetarian", "Red Onions, Sliced Tomatoes, Olives, and Broccoli");

    // Mediterranean
    createPizzaElement(pizza8, "Mediterranean", "Salty feta, Peppery basil, Briny Kalamata olives, and Tangy sundried tomatoes");
    
    // Mexican
    createPizzaElement(pizza9, "Mexican", "Salami and Red Hot Chilli Peppers! 🎵");

    
    function appendContainer(container, img, name, description, button) {
        container.appendChild(img);
        container.appendChild(name);
        container.appendChild(description);
        container.appendChild(button);
        menuContainer.appendChild(container);
    }
}