import { loadMovies  } from './scripts/api/loadMovies';
import { searchMovie } from './scripts/api/searchMovies';
import { lightBox } from './scripts/modules/lightbox';
import { hideHeader } from './scripts/modules/hideHeader';
import { theme } from './scripts/modules/theme';
import './styles/styles.css';

const API = 'https://api.themoviedb.org/3/';
const API_KEY = '5b10cc3f5c9bf78fd803aa65ec24ef7d';

let page = 1;

hideHeader();
theme();

loadMovies(API, API_KEY, page);
searchMovie(API, API_KEY);
lightBox(API, API_KEY);