import { $ } from '../modules/selector';
import { loadInfo } from './loadInfo';
import getLocation from '../modules/getLocation';
import errorPage from '../modules/errorPage';

const search = $('#search');

let url = getLocation(location.href);
let dataMovies = '';

const searchInfoMovie = (API, API_KEY, search) => {
    fetch(`${API}search/movie?api_key=${API_KEY}&language=es-MX&page=1&query=${search}`)
    .then(request => {
        if (request.status === 200) {
            request.json()
            .then(movies => {
                movies.results.forEach(movie => {
                    if (movie.poster_path) { 
                        dataMovies += loadInfo(movie);
                    }
                });

                $('.movies').innerHTML = dataMovies;
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

export const searchMovie = (API, API_KEY) => {
    if (url !== 'buscar.html') return;

    search.addEventListener('input', () => {
        let searchValue = search.value;
        dataMovies = '';
        
        if (searchValue !== '') {
            searchInfoMovie(API, API_KEY, searchValue);
        }
    });
}