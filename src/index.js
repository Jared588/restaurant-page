import './styles.css';
import Home from './home';

function initialize() {
    const header = document.createElement('header');
    const tabContainer = document.createElement('div');

    const tabHome = document.createElement('button');
    const tabMenu = document.createElement('button');
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

initialize();
Home();