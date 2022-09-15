import './js/createMarkup';
import { fetchEvents } from './js/fetchEvents';
import { EventAPI } from './js/eventapi';
import { createMarkup } from './js/createMarkup';
import './js/mainModal';
import './js/ourModal';
import './js/paginnation';
import './js/search';

const gallery = document.querySelector('.gallery');
const input = document.querySelector('input');
const form = document.querySelector('form');

async function searcEventandCreateMarcup(data) {
  const events = await fetchEvents(data);
  console.log(events);
  gallery.insertAdjacentHTML('beforeend', createMarkup(events));
}
form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(e.currentTarget.elements[0].value);
  const query = e.currentTarget.elements[0].value;
  searcEventandCreateMarcup(query);
});
