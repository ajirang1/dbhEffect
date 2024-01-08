const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);
const text = document.querySelector('.mainText');


document.onload; {
    const square1 = document.querySelector('.square1');
setInterval(() => {
    square1.style.left= getRandom(0, 100)+'%'; // 👈🏼 Horizontally
    square1.style.top = getRandom(0, 100)+'%'; // 👈🏼 Vertically

    square1.style.width = getRandom(40, 70)+'%';
    square1.style.height = square1.style.width;
     
    console.log(square1.style.left)
 }, 300);


 const square2 = document.querySelector('.square2');
setInterval(() => {
    square2.style.left= getRandom(0, 100)+'%'; // 👈🏼 Horizontally
    square2.style.top = getRandom(0, 100)+'%'; // 👈🏼 Vertically
    square2.style.width = getRandom(50, 80)+'%';
    square2.style.height = square2.style.width;
     
    console.log(square2.style.left)
 }, 400); 


 const square3 = document.querySelector('.square3');
setInterval(() => {
    square3.style.left = getRandom(0, 100)+'%'; // 👈🏼 Horizontally
    square3.style.top = getRandom(0, 100)+'%'; // 👈🏼 Vertically

    
    square3.style.width = getRandom(0, 40)+'%';
    square3.style.height = square3.style.width;
     
    console.log(square3.style.left)
 }, 100);


 
}
