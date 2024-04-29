// TMDB api

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTNkNTljYzA3YmE1OGVhNmE0YzhmN2IxNTBlOWE1OCIsInN1YiI6IjY2MjVmMTBkY2I1YzhlMDE0YTNlZTg4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.36hbDCwrSq_XgN7tUsLHC6drNzYx0Mx0dtIz_8drvBs'
    }
};

// TMDB api handling AND roof results for card creation In main page

const mainApi = async () => {
    try {
        const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
        const data = await res.json();
        return data['results']
    } catch (err) {
        console.log(err);
    }
}

const handleCardCreation = (results) => {
    results.forEach(createMainCard);
}

// create card section

const createMainCard = (el) => {
    const mainCard = `
        <div class="main-card" onclick = "alert('영화 id : ${el.id}')">
            <div class="main-card-header">
                <img src="https://image.tmdb.org/t/p/w500${el.poster_path}">
            </div>
            <div class="main-card-body">
                <p class="main-card-title">${el.title}</p>
                <p class="main-card-overview">${el.overview}</p>
            </div>
            <div class="main-card-footer">
                <p>Rating: ${el.vote_average}</p>
            </div>
        </div>
        `;
    document.getElementById('main-section').insertAdjacentHTML('beforeend', mainCard);
}

// main page

window.onload = async () => {
    const results = await mainApi();
    handleCardCreation(results);
};

const mainUrl = "file:///c%3A/Users/qhrrh/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/coding/%EC%8A%A4%ED%8C%8C%EB%A5%B4%ED%83%80/2%EC%A3%BC%EC%B0%A8%20javascript%20%28%EC%98%81%ED%99%94%20%EB%A6%AC%EC%8A%A4%ED%8A%B8%20%EC%A1%B0%ED%9A%8C%29/movies.html";

const homeButton = document.getElementById('button-backhome');
homeButton.addEventListener('click', () => {location.replace(mainUrl)});

// serach event

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('button-search');
const searchClearButton = document.getElementById('search-clear-button');

searchButton.addEventListener('click', async () => {
    try {
        const results = await mainApi();
        const searchResults = results.filter(el => el.title.toLowerCase().includes(searchInput.value.toLowerCase()));
        document.getElementById('main-section').innerHTML = "";
        
        if (searchResults.length > 0) {
            handleCardCreation(searchResults);
        } else {
            alert("리스트에 없는 영화입니다. 다시 검색하세요.");
            location.replace(mainUrl);
        }
        
        if (searchInput.value === '') {
            alert('검색어를 입력해 주셔야 합니다.');
            location.replace(mainUrl);
        }

    } catch (err) {
        console.error(err)
    }
});

searchClearButton.addEventListener('click', () => {
    searchInput.value = ''
    searchInput.placeholder;
})

searchInput.addEventListener('keyup', (e) => {
    e.code === 'Enter' ? searchButton.click() : false;
    e.code === 'Escape' ? searchInput.value = '' : false;
});

searchInput.addEventListener('mousedown', () => {
    searchInput.placeholder = '';
})

// url 관련 시험
// const searchUrl = `${mainUrl}?search=${encodeURIComponent(searchInput.value)}`;
// location.replace(searchUrl);

// movie select page

