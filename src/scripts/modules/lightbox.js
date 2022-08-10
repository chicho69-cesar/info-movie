import { $ } from '../modules/selector';
import { searchMovie } from '../api/searchMovie';

let moviesContainer = $('.movies');
let close = $('.modal__close');
let modal = $('.modal');
let infoContainer = $('.modal__info');

const showInfo = (API, API_KEY, id) => {
    searchMovie(API, API_KEY, id);

    modal.classList.add('modal__show');
    modal.classList.remove('modal__hidde');
    infoContainer.classList.add('modal__showInfo');
    infoContainer.classList.remove('modal__hiddeInfo');
}

export const lightBox = (API, API_KEY) => {
    moviesContainer.addEventListener('click', e => {
        if (e.target && e.target !== moviesContainer) {
            e.preventDefault();
            showInfo(API, API_KEY, e.target.classList[1]);
        }
    });
    
    close.addEventListener('click', () => {
        modal.classList.add('modal__hidde');
        modal.classList.remove('modal__show');
        infoContainer.classList.add('modal__hiddeInfo');
        infoContainer.classList.remove('modal__showInfo');
    });
}