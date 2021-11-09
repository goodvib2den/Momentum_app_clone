// img array
const imgs = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

// ramdom imgs
const imgSelec = imgs[Math.floor(Math.random() * imgs.length)];

// create img elements
const bgImg = document.createElement("img");
bgImg.src = `img/${imgSelec}`;

// append and paint img
document.body.appendChild(bgImg);
