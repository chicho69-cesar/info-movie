import { loadMovie } from './loadMovie';
import errorPage from '../modules/errorPage';

export const searchMovie = (API, API_KEY, id) => {
    fetch(`${API}movie/${id}?api_key=${API_KEY}&language=es-MX`)
    .then(request => {
        if (request.status === 200) {
            request.json()
            .then(movie => {
                loadMovie(movie);
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