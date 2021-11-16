// img empty array
const imgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

// random imgs
const imgSelec = imgs[Math.floor(Math.random() * imgs.length)];

// print bg img
document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url("/img/${imgSelec}")`;
