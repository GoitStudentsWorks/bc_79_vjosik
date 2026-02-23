import {
  fetchArtists,
  fetchArtistsAlbums,
  fetchArtistsById,
} from './js/api/artists-api';
import { fetchFeetbacks } from './js/api/feedback-api';
import { fetchGenres } from './js/api/genres-api';
import { DEFAULT_PAGE, FEEDBACKS_LIMIT } from './js/config/config';
import '../src/js/feedback/feedbacks';
import { createFeedbackList } from '../src/js/feedback/feedbacks';

import './js/artist/render-artist';
import './js/close-open.js/mobile-menu';
import './js/components/modal-artist/modal';
<<<<<<< HEAD

fetchFeetbacks().then(createFeedbackList);
=======
import './js/utills/scrolling';

import 'loaders.css/loaders.min.css';
>>>>>>> e058d25ab46034c69dc64978bacb8ba06c1fce55
