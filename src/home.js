export default function Home() {
    const main = document.querySelector(".main");

    main.innerHTML = "Delicious Slices, Memorable Bites - Your Pizza Paradise Awaits!";
    main.classList.add("home");
    console.log("success");
}