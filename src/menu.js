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
    createPizzaElement('../src/images/pizzas/pizza1.png', "Margherita", "Plain Tomato Base with Mozarella Cheese");

    // Tomato & Mushroom
    createPizzaElement('../src/images/pizzas/pizza2.png', "Tomato & Mushroom", "Tomato, Olives and Sliced Tomatoes");

    // Pepperoni
    createPizzaElement('../src/images/pizzas/pizza3.png', "Pepperoni", "Classic Pepperoni with Mozarella Cheese");

    // Meat Supreme
    createPizzaElement('../src/images/pizzas/pizza4.png', "B-T-O", "Bacon, Tomato and Olives");

    // Hawaain
    createPizzaElement('../src/images/pizzas/pizza5.png', "Hawaiian", "Yes, Pineapple Belongs on Pizza");

    // Seafood
    createPizzaElement('../src/images/pizzas/pizza6.png', "Seafood", "Arrr, a Pirates Treat for Me!");

    // Vegetarian
    createPizzaElement('../src/images/pizzas/pizza7.png', "Vegetarian", "Red Onions, Sliced Tomatoes, Olives, and Broccoli");

    // Mediterranean
    createPizzaElement('../src/images/pizzas/pizza8.png', "Mediterranean", "Salty feta, Peppery basil, Briny Kalamata olives, and Tangy sundried tomatoes");
    
    // Mexican
    createPizzaElement('../src/images/pizzas/pizza9.png', "Mexican", "Salami and Red Hot Chilli Peppers! 🎵");

    
    function appendContainer(container, img, name, description, button) {
        container.appendChild(img);
        container.appendChild(name);
        container.appendChild(description);
        container.appendChild(button);
        menuContainer.appendChild(container);
    }
}