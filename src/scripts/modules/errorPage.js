import { $ } from './selector';

const movies = $('.movies');

const errorPage = error => {
    movies.innerHTML = `
        <h1 class="movies__error">⚠️Error ${error.message} 😔</h1>
    `;
}

export default errorPage;