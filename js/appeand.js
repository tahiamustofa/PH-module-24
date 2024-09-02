// console.log('connected appeand js');
// 1
const mainCont = document.getElementById('main-container');
// 2
const section = document.createElement('section');
// 3
const h1 = document.createElement('h1');
h1.innerText= 'Drama fav drama of bangladesh';
section.appendChild(h1);

// 4
const ul=document.createElement('ul');

const li1= document.createElement('li');
li1.innerText = 'Ehd E Wafa';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Mahpara';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Quyamat';
ul.appendChild(li3);

// 5
section.appendChild(ul);
mainCont.appendChild(section);

// set html directly

const dressSection = document.createElement('section');
dressSection.innerHTML= `
<h1 id="places-title">Dress I have</h1>
        <ul id="places-list">
            <li class="imp-place"><a href="">Jipshi</a></li>
            <li class="imp-place"><a href="">Long Gown</a></li>
            <li class="imp-place"><a href="">Three piece</a></li>
        </ul>
`;

mainCont.appendChild(dressSection);