const searchForm = document.querySelector('#search-form');
const apiKey = '35f31bc5ec65018dd8090674c49fe3d2';
const apiSearch = (event) => {
    event.preventDefault();
    const searchText = document.querySelector('.form-control').value;
    console.log('searchText:', searchText);
    const server = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${searchText}`;
    requestAPI('GET', server);
}

searchForm.addEventListener('submit', apiSearch);

const requestAPI = (method, url) =>{
const request = new XMLHttpRequest();
request.open(method, url, true);
request.send();
console.log('request', request);
request.addEventListener('readystatechange', () => {
if (request.readyState !== 4)
return;
console.log(request.readyState);

})

return url;    
} 
