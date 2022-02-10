export const loadInfo = movie => {
    return `
        <a href="#" class="movies__link ${movie.id}">
            <article class="movies__movie ${movie.id}">
                <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" class="movies__poster ${movie.id}">
                <h3 class="movies__title ${movie.id}">${movie.title}</h3>
            </article>
        </a>
    `;
}