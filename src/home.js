export default function Home() {
    const main = document.querySelector(".main");
    main.classList.add("home");

    const slogan = document.createElement('p');
    slogan.classList.add("slogan");
    slogan.innerHTML = "Delicious Slices, Memorable Bites <br> Your Pizza Paradise Awaits!";

    const orderNowBtn = document.createElement('btn'); 
    orderNowBtn.classList.add("orderNowBtn");
    orderNowBtn.innerHTML = "Order Now"
    
    main.appendChild(slogan);
    main.appendChild(orderNowBtn);
}