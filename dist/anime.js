"use strict";
// // Animation Button 
// const animateButton = (e: MouseEvent): void => {
//     e.preventDefault();
//     // reset animation
//     (e.target as HTMLElement).classList.remove('animate');
//     (e.target as HTMLElement).classList.add('animate');
//     setTimeout(() => {
//       (e.target as HTMLElement).classList.remove('animate');
//     }, 700);
//   };
//   const bubblyButtons = document.getElementsByClassName("bubbly-button");
//   for (let i = 0; i < bubblyButtons.length; i++) {
//     bubblyButtons[i].addEventListener('click', animateButton as EventListener);
//   }
const sample = require('./main.json');
console.log(sample);
