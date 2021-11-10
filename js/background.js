// img array
const imgs = [];

// img array for fn
for (i = 1; i <= 5; i++) {
  imgs.push(`${i}.jpg`);
}

// ramdom imgs
const imgSelec = imgs[Math.floor(Math.random() * imgs.length)];

// print bg img
document.body.style.backgroundImage = `url("/img/${imgSelec}")`;
