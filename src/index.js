import './js/createMarkup';
import { fetchEvents } from './js/fetchEvents';
import { EventAPI } from './js/eventapi';
import { createMarkup } from './js/createMarkup';
import { addCountryInSelectList } from './js/AllCountry';
import './js/mainModal';
import './js/ourModal';
import './js/paginnation';
import './js/search';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('form');
// Додає країни до випадаючого списку
addCountryInSelectList();
async function searcEventandCreateMarcup(data) {
  const events = await fetchEvents(data);
  if (events) {
    gallery.insertAdjacentHTML('beforeend', createMarkup(events));
  }
}
// Попередній рендер карток за запитом 'Music'
searcEventandCreateMarcup('Music');
// Пошук та рендер карток за запитом у інпуті
form.addEventListener('submit', e => {
  e.preventDefault();
  const countryCode = e.currentTarget.country.value;
  if (e.currentTarget.country.value !== 'default') {
    EventAPI.countryCode = countryCode;
  }
  const query = e.currentTarget.elements.searchInput.value;
  if (query !== '') {
    searcEventandCreateMarcup(query);
  }
});
