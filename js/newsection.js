const main = document.getElementById('mainCLu');


const nSection = document.createElement('section');

nSection.innerHTML = `
<h1 class="section-title">dynamic Section</h1>
            <ul>
                <li>Tahia</li>
                <li>list-item-2</li>
                <li>list-item-3</li>
                <li>list-item-4</li>
            </ul>
` 

main.appendChild(nSection);
