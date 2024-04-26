// TMDB api

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTNkNTljYzA3YmE1OGVhNmE0YzhmN2IxNTBlOWE1OCIsInN1YiI6IjY2MjVmMTBkY2I1YzhlMDE0YTNlZTg4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.36hbDCwrSq_XgN7tUsLHC6drNzYx0Mx0dtIz_8drvBs'
    }
};

// main page api

const mainApi = async () => {
    try {
        const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}

// api data roof

const roofApiData = async () => {
    try {
        const data = await mainApi();
        if (data) {
            const MainSection = document.getElementById('main-section');
            const results = data['results'];
            results.forEach(el => {
                createMainCard(MainSection, el);
                // const mainTitle = el.title;
                // searchEvent(mainTitle);
            });
        } else {
            console.log('Error fetching data');
        }
    } catch (err) {
        console.error(err);
    }
}

// create card section

const createMainCard = async (MainSection, el) => {
    try {
        const { id: mainId, 
            title: mainTitle, 
            overview: mainOverview, 
            vote_average: mainVoteAverage, 
            poster_path: posterPath } 
            = el;

        const mainCard = document.createElement('div');
        mainCard.classList.add('main-card');
        mainCard.innerHTML = `
            <div class="main-card-header">
                <img src="https://image.tmdb.org/t/p/w500${posterPath}">
            </div>
            <div class="main-card-body">
                <p class="main-card-title">${mainTitle}</p>
                <p class="main-card-overview">${mainOverview}</p>
            </div>
            <div class="main-card-footer">
                <p>Rating: ${mainVoteAverage}</p>
            </div>
        `;
        
        MainSection.append(mainCard);
        
        mainCard.addEventListener('click', () => {
            window.alert(`영화 id : ${mainId}`)
        });


        // serach evnet

        const searchButton = document.getElementById('button-search');
        const searchInput = document.getElementById('search-input');
        
        searchButton.addEventListener('click', function () {
            if (mainTitle.toLowerCase().includes(searchInput)) {
                createMainCard(MainSection, el);
            } else {
                window.alert('리스트에 없는 영화입니다! 다시 검색해 주세요.')
            }
        });

    } catch (err) {
        console.error(err);
    }
}

// const searchButton = document.getElementById('button-search');
// const searchInput = document.getElementById('search-input');
        
// searchButton.addEventListener('click', function searchEvent(mainTitle) {
//     if (mainTitle.toLowerCase().includes(searchInput)) {
//         createMainCard(MainSection, el);
//     } else {
//         window.alert('리스트에 없는 영화입니다! 다시 검색해 주세요.')
//     }
// });

roofApiData();

// main search event

// let searchButtonClicked = false;

// searchInput.addEventListener('mousedown', function () {
//     searchInput.placeholder = '';
// });

// searchInput.addEventListener('blur', function () {
//     searchButtonClicked = false; console.log('false');
//     searchInput.value = '';
//     searchInput.placeholder = '제목을 검색해 보세요.';
// });

// searchButton.addEventListener('click', function () {
//     searchButtonClicked = true; console.log('true');

//     if (searchInput.value === 'abc') {
//         alert('추천에 없는 영화입니다. 다시 검색해 주세요.')
//     }
// });

// searchButton.addEventListener('click', function () {
    
//     const irrelevantAphTitle = el.MainTitle.toLowerCase();

    // if (searchInput.value)

// })