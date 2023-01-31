let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

let serachBtn = document.querySelector('.fa-search');
let searchInput = document.getElementById('search-input');


serachBtn.addEventListener('click', ()=>{
    let searchWord = searchInput.value.toLowerCase();
    console.log(searchWord)
})

fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))