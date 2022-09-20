import { EventAPI } from './eventapi';
import badRequestImg from '../images/catSearch.svg';
const gallery = document.querySelector('.gallery');
const failed = document.querySelector('.failed--request');
const paginationIteam = document.querySelector('.pagination');

export async function fetchEvents(data) {
  const response = await EventAPI.searcEvent(data);
  let eventsArray;
  try {
    eventsArray = { events: response._embedded.events, allData: response };
    failed.innerHTML = '';
  } catch (error) {
    paginationIteam.innerHTML = '';
    gallery.innerHTML = '';
    failed.innerHTML = `<p class="header-title">Our cats did not find anything, please change your request or select another country</p><div class="bad--request"><img src="${badRequestImg}" alt="Our cats did not find anything" width ="400px"/><a class="button" href="index.html">RETURN TO HOME</a></div>`;
  }
  return eventsArray;
}
