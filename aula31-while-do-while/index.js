// let i = 0;

// while (i <= 10) {
//     console.log(i);
//     i++;
// }
function randow(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = randow(min, max);
let i = 0;
while (rand !== 10) {
    rand = randow(min, max);
    console.log(rand);
    i++;
}
console.log(`Executou ${i} vezes até achar o 10`);