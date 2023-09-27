import './styles.css';
import Home from './home';
import Menu from './menu';

function initialize() {
    clear();

    const header = document.createElement('header');
    const tabContainer = document.createElement('div');

    const tabHome = document.createElement('button');
    tabHome.addEventListener('click', () => switchTab("home"));
    const tabMenu = document.createElement('button');
    tabMenu.addEventListener('click', () => switchTab("menu"));
    const tabAbout = document.createElement('button');

    const main = document.createElement('div'); 
    const footer = document.createElement('footer');
    
    header.classList.add("header");
    tabContainer.classList.add("tab-container")
    tabHome.classList.add("tab");
    tabMenu.classList.add("tab");
    tabAbout.classList.add("tab");
    main.classList.add("main");
    footer.classList.add("footer");

    // Header
    header.innerHTML = "Pizza Paradise";

    // Tabs
    tabHome.innerHTML = "Home";
    tabMenu.innerHTML = "Menu";
    tabAbout.innerHTML = "About";

    tabContainer.appendChild(tabHome);
    tabContainer.appendChild(tabMenu);
    tabContainer.appendChild(tabAbout);

    // Footer
    footer.innerHTML = "Copyright @ Jared Price";

    document.body.appendChild(header);
    header.appendChild(tabContainer);
    document.body.appendChild(main);
    document.body.appendChild(footer);
}

export function switchTab(page) {
    initialize();
    if (page === "home") {
        Home();
    }
    if (page === "menu") {
        Menu();
    }
}

function clear() {
    document.body.innerHTML = '';
}

// Default
initialize();
Home();