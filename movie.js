// TMDB api

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTNkNTljYzA3YmE1OGVhNmE0YzhmN2IxNTBlOWE1OCIsInN1YiI6IjY2MjVmMTBkY2I1YzhlMDE0YTNlZTg4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.36hbDCwrSq_XgN7tUsLHC6drNzYx0Mx0dtIz_8drvBs'
    }
};

function movieApi() {
fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}

// 검색 이벤트

const searchFocus = document.getElementById('search-input');
searchFocus.addEventListener('mousedown', function () {
    searchFocus.placeholder = '';
});
searchFocus.addEventListener('blur', function () {
    searchFocus.value = '';
    searchFocus.placeholder = '제목을 검색해 보세요.';
});

// const searchButton = document.getElementById('button-search');
// searchButton.addEventListener('click', function weeklyMovie () {

// })