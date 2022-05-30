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
    let strArr = str.replace( /[\t\n\r]/gm, ' ').split(' ');
    strArr = strArr.map((word => {
        let wordArea = document.createElement('span');
        if ( isNaN(+word)) { 
            
            if(word.length === 1) {
                wordArea.classList.add('one-letter');
                wordArea.innerText = word + ' ';
                
            } 
            if(word.length >= 2) {
                wordArea.classList.add('letters');
                let upperChar = document.createElement('span');
                let upperLen = Math.floor(word.length / 2);
                upperLen = upperLen > 4 ? 4 : upperLen;
                upperChar.classList.add('upper-char');
                upperChar.innerText = word.slice(0,upperLen);
                wordArea.appendChild(upperChar);

                let restChar = document.createElement('span');
                restChar.classList.add('rest-char');
                restChar.innerText = word.slice(upperLen) + ' ';
                wordArea.appendChild(restChar);
            }
            
        } else {
            wordArea.innerHTML = word + ' ';
            wordArea.classList.add('upper-char');
        }
        output.appendChild(wordArea);
    })) 

}


 