import Framework7, { getDevice } from 'framework7';

import Searchbar from 'framework7/components/searchbar';
import Calendar from 'framework7/components/calendar';
import Popup from 'framework7/components/popup';

import 'framework7/components/searchbar/css';
import 'framework7/components/calendar/css';
import 'framework7/components/popup/css';


Framework7.use([Searchbar, Calendar, Popup]);

// Init app
var app = new Framework7({/*...*/});
