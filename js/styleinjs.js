const sections = document.querySelectorAll('section'); //sobgulo claass id select kore  
const sectionsS = document.querySelector('section'); //just 1st  claass id select kore 
// console.log(sectionsS);
// console.log(sections);


for (const section of sections) {
    // console.log(section);
    section.style.border = '2px solid greenyellow';
    section.style.marginBottom= '10px';
    section.style.paddingLeft= '10px';
    section.style.borderRadius= '10px';
    section.style.backgroundColor= 'lightgray';

}

// const otherSec = document.getElementById('jalal');

// otherSec.style.backgroundColor= 'yellow';

const testA= document.getElementById('test');
const otherSecZ = document.getElementById('jalal');
otherSecZ.classList.add('red-bg');
testA.classList.remove('fz');




