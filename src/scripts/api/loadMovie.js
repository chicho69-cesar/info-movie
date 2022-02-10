import { $ } from '../modules/selector';
import { dateFormat, moneyFormat } from '../modules/functionalities';

let infoContainer = $('.modal__info');

export const loadMovie = movie => {
    console.log('loadMovie llega');

    let geners = '';
    movie.genres.forEach(gener => {
        geners += `<span class="modal__gener">${gener.name}</span>`;
    });

    infoContainer.innerHTML = `
        <div class="modal__imgage">
            <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" class="modal__img">
        </div>
        <div class="modal__description">
            <div class="modal__header">
                <h2 class="modal__title">${movie.title}</h2>
                <h4 class="modal__date">${dateFormat(movie.release_date)}</h4>
            </div>
            <div class="modal__main">
                <p class="modal__text">${movie.overview}</p>
                <div class="modal__geners">${geners}</div>
                <div class="modal__costs">
                    <p class="modal__cost"><span>Presupuesto: </span>${moneyFormat(movie.budget)}</p>
                    <p class="modal__cost"><span>Recaudación: </span>${moneyFormat(movie.revenue)}</p>
                </div>
            </div>
            <div class="modal__calification">
                <span class="calification__title">Calificación: </span>
                <span class="calification__value">${movie.vote_average}</span>
            </div>
        </div>
    `;
}