// img empty array
const imgs = [];

// img array push fn
for (i = 1; i <= 5; i++) {
  imgs.push(`${i}.jpg`);
}

// random imgs
const imgSelec = imgs[Math.floor(Math.random() * imgs.length)];

// print bg img
document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url("/img/${imgSelec}")`;
