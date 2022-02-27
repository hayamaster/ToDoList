const images = [
    "1.jpeg", "2.jpeg", "3.jpeg", "4.png", "5.jpeg", "7.jpeg", "8.jpeg", "10.jpeg", "11.jpeg", "12.jpeg", "13.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const image = document.createElement("img");
image.src = `photo/${chosenImage}`;
image.classList.add("image");

document.body.appendChild(image);