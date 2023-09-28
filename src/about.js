export default function About() {
    // Main
    const main = document.querySelector(".main");
    main.classList.add("about");

    // Create a heading for the contact information
    const heading = document.createElement('h3');
    heading.classList.add('info-heading');
    heading.textContent = "Contact us"; // Use textContent to set text
    main.appendChild(heading);

    // Create a container for contact information
    const infoContainer = document.createElement('div');
    infoContainer.classList.add("info-container");

    // Create paragraphs for contact information
    const location = document.createElement('p');
    location.classList.add('location');
    location.textContent = "📍 123 Paradise Street"; // Use textContent to set text
    infoContainer.appendChild(location);

    const times = document.createElement('p');
    times.classList.add('times');
    times.textContent = "🕒 Mon-Thurs: 8am-8pm, Fri-Sun: 8am-11pm"; // Use textContent to set text
    infoContainer.appendChild(times);

    const phoneNumber = document.createElement('p');
    phoneNumber.classList.add('phone-number');
    phoneNumber.textContent = "☎️ (222)-888 5555"; // Use textContent to set text
    infoContainer.appendChild(phoneNumber);

    // Create a heading for the contact form
    const messageUs = document.createElement('h4');
    messageUs.classList.add('message-us');
    messageUs.textContent = "Message us"; // Use textContent to set text
    infoContainer.appendChild(messageUs);

    // Create a form for contacting
    const emailForm = document.createElement('form');
    emailForm.classList.add('contact-form');

    // Create input fields for the form
    const fullNameInput = document.createElement('input');
    fullNameInput.classList.add('form-input');
    fullNameInput.setAttribute('placeholder', 'Full Name'); // Use setAttribute to set placeholder
    emailForm.appendChild(fullNameInput);

    const emailInput = document.createElement('input');
    emailInput.classList.add('form-input');
    emailInput.setAttribute('placeholder', 'Email'); // Use setAttribute to set placeholder
    emailForm.appendChild(emailInput);

    const messageInput = document.createElement('textarea');
    messageInput.classList.add('form-input');
    messageInput.setAttribute('placeholder', 'Type your message...'); // Use setAttribute to set placeholder
    emailForm.appendChild(messageInput);

    // Create a submit button
    const submitButton = document.createElement('button');
    submitButton.classList.add('submit-button');
    submitButton.textContent = "Submit"; // Use textContent to set text
    emailForm.appendChild(submitButton);

    // Add the form to the container
    infoContainer.appendChild(emailForm);

    // Add the info container to the main element
    main.appendChild(infoContainer);
}