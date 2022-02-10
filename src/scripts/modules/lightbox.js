import { $ } from '../modules/selector';
import { searchMovie } from '../api/searchMovie';

let moviesContainer = $('.movies');
let close = $('.modal__close');
let modal = $('.modal');
let infoContainer = $('.modal__info');

const showInfo = (API, API_KEY, id) => {
    console.log('showInfo llega');
    searchMovie(API, API_KEY, id);
    modal.classList.toggle('modal__show');
    infoContainer.classList.toggle('modal__showInfo');
}

export const lightBox = (API, API_KEY) => {
    moviesContainer.addEventListener('click', e => {
        if (e.target && e.target !== moviesContainer) {
            e.preventDefault();
            showInfo(API, API_KEY, e.target.classList[1]);
        }
    });
    
    close.addEventListener('click', () => {
        modal.classList.toggle('modal__show');
        infoContainer.classList.toggle('modal__showInfo');
    });
}