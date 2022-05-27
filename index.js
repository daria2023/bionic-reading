const input = document.querySelector('.input');
const form = document.querySelector('.form');
const output = document.querySelector('.output-area');

let inputContent = '';

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    output.innerHTML = '';
    transLetters(input.value);
    input.value = '';
    input.classList.add('complete');
})


function transLetters (str) {
    let strArr = str.split(' ');
    strArr = strArr.map((word => {
        let wordArea = document.createElement('span');
            
        if(word.length === 1) {
            wordArea.classList.add('one-letter');
            wordArea.innerText = word + ' ';
            
        } else if(word.length === 2) {
            wordArea.classList.add('two-letters');
            let firstChar = document.createElement('span');
            firstChar.classList.add('first-char');
            firstChar.innerText = word[0];
            wordArea.appendChild(firstChar);

            let restChar = document.createElement('span');
            restChar.classList.add('rest-char');
            restChar.innerText = word.slice(1) + ' ';
            wordArea.appendChild(restChar);
        } else {
            wordArea.classList.add('letters');
            let firstTwoChar = document.createElement('span');
            firstTwoChar.classList.add('first-char');
            firstTwoChar.innerText = word[0] + word [1];
            wordArea.appendChild(firstTwoChar);

            let restChar = document.createElement('span');
            restChar.classList.add('rest-char');
            restChar.innerText = word.slice(2) + ' ';
            wordArea.appendChild(restChar);
        }
        output.appendChild(wordArea);
    })) 

}
