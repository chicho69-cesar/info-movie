import { $, $$ } from '../modules/selector';
import { loadInfo } from './loadInfo';
import look from '../modules/observer';
import errorPage from '../modules/errorPage';

let dataMovies = '';
let lastMovie;
let observer;

export const loadMovies = (API, API_KEY, page) => {
    observer = look(API, API_KEY, page);

    fetch(`${API}movie/popular?api_key=${API_KEY}&language=es-MX&page=${page}`)
    .then(request => {
        if (request.status === 200) {
            request.json()
            .then(movies => {
                movies.results.forEach(movie => {
                    dataMovies += loadInfo(movie);
                });

                $('.movies').innerHTML = dataMovies;

                if (page < 1000) {
                    if (lastMovie) { observer.unobserve(lastMovie); }
                    const screenMovies = $$('.movies .movies__link');
                    lastMovie = screenMovies[screenMovies.length - 1];
                    observer.observe(lastMovie);
                }
            })
            .catch(error => {
                errorPage(error);
            });
        }
    })
    .catch(error => {
        errorPage(error);
    });
}