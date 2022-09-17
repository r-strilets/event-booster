import './js/createMarkup';
import { fetchEvents } from './js/fetchEvents';
import { EventAPI } from './js/eventapi';
import { createMarkup } from './js/createMarkup';
import { addCountryInSelectList } from './js/AllCountry';
import { createModal } from './js/mainModal';
import { oncreateClick } from './js/paginationNumbers';
import './js/ourModal';
import './js/paginnation';
import './js/search';
import './js/search';
import './js/paginationNumbers';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('form');
const mainModal = document.querySelector('#modal');
let events;
addCountryInSelectList();
async function searcEventandCreateMarcup(data) {
  events = await fetchEvents(data);
  if (events) {
    gallery.innerHTML = createMarkup(events);
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

gallery.addEventListener('click', e => {
  e.preventDefault();
  // let eventcard = e.target.closest('[data-id]');
  const eventCardID = e.target.closest('.gallery__item').id;
  const eventsID = events.filter(event => event.id === eventCardID);
  if (events) {
    console.log(eventCardID);
    console.log(eventsID);
    mainModal.innerHTML = createModal(eventsID);
  }

  // console.log(eventcard.dataset.id);
  // console.log(e.currentTarget);
  // createModal();
});
searcEventandCreateMarcup();
