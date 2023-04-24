const inputSearch = document.getElementById('search');
inputSearch.addEventListener('keypress', ({key}) => {
    if(key == 'Enter'){
        window.location.href = 'https://duckduckgo.com/'+inputSearch.value;
    }
});

