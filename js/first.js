console.log('first file');

const allLi= document.getElementsByTagName('li');
console.log(allLi);

const allTitle = document.getElementsByClassName('section-title');
console.log(allTitle);

const sectionSecond = document.getElementById('second-section') ;
console.log(sectionSecond);

sectionSecond.style.color= 'pink';
sectionSecond.style.backgroundColor= 'blue';

// document.querySelector *1st ta dibe
// document.querySelectorAll *sobgulo node list gulo dibe

const getUL = document.getElementById('second-list');

const createLi = document.createElement('li');
createLi.innerText = 'dynamic Li I am';

getUL.appendChild(createLi);






