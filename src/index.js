import './styles.css';
import Home from './home';

function initialize() {
    const header = document.createElement('header');
    const main = document.createElement('div'); 
    const footer = document.createElement('footer');
    
    header.classList.add("header");
    main.classList.add("main");
    footer.classList.add("footer");

    // Header
    header.innerHTML = "Pizza Paradise"

    // Footer
    footer.innerHTML = "Copyright @ Jared Price"

    document.body.appendChild(header);
    document.body.appendChild(main);
    document.body.appendChild(footer);
}

initialize();
Home();