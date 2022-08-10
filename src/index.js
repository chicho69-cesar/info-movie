import { loadMovies  } from './scripts/api/loadMovies';
import { searchMovies } from './scripts/api/searchMovies';
import { lightBox } from './scripts/modules/lightbox';
import { hideHeader } from './scripts/modules/hideHeader';
import { theme } from './scripts/modules/theme';
import './styles/styles.css';

const API = 'https://api.themoviedb.org/3/';
const API_KEY = 'Tu api Key';

let page = 1;

hideHeader();
theme();

loadMovies(API, API_KEY, page);
searchMovies(API, API_KEY);
lightBox(API, API_KEY);