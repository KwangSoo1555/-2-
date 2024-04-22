// TMDB api

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTNkNTljYzA3YmE1OGVhNmE0YzhmN2IxNTBlOWE1OCIsInN1YiI6IjY2MjVmMTBkY2I1YzhlMDE0YTNlZTg4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.36hbDCwrSq_XgN7tUsLHC6drNzYx0Mx0dtIz_8drvBs'
    }
};

// main page api

function movieMain() {
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

// main search event

const searchFocus = document.getElementById('search-input');

searchFocus.addEventListener('mousedown', function () {
    searchFocus.placeholder = '';
});

const searchButton = document.getElementById('button-search');
searchButton.addEventListener('click', function weeklyMovie() {
    movieMain();

    

    if(searchFocus.value === 'abc') {
        alert('추천에 없는 영화입니다. 다시 검색해 주세요.')
    }
    searchFocus.addEventListener('blur', function () {
        searchFocus.value = '';
        searchFocus.placeholder = '제목을 검색해 보세요.';
    });
});

// function weeklyMovie() {

// }