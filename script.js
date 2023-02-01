let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

let serachBtn = document.querySelector('.fa-search');
let searchInput = document.getElementById('search-input');

let text = document.getElementById('text');


    

serachBtn.addEventListener('click', ()=>{
    let searchWord = searchInput.value;
    fetch(`${url}${searchWord}`)
    .then(res => res.json())
    .then((dictionary)=>{
        console.log(dictionary); 
        text.innerHTML =`
             <div class="search-words">
            <h3>${searchWord}</h3>
        </div>
        <div class="details">
            <p>${dictionary[0].meanings[0].partOfSpeech}</p>
        </div>
        <div class="word-meaning">${dictionary[0].meanings[0].definitions[0].definition}</div>    
        <div class="word-example">${dictionary[0].meanings[0].definitions[0].example || ""}</div>`;
 
    })
    .catch(()=>{
        if (!window.navigator.onLine){
            text.innerHTML = `<h4 class="error">Sorry  You are Offline</h4>`;
        }
        else{
            text.innerHTML = `<h4 class="error">Type another word</h4>`;
        }
    })
})






