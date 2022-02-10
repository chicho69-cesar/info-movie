import { loadMovies } from '../api/loadMovies';

const look = (API, API_KEY, page) => {
    let observer = new IntersectionObserver(movies => {
        movies.forEach(movie => {
            if (movie.isIntersecting) {
                ++page;
                if (page < 1000) {
                    loadMovies(API, API_KEY, page);
                }
            }
        });
    }, { rootMargin: '0px 0px 250px 0px', threshold: 1.0 });

    return observer;
}

export default look;