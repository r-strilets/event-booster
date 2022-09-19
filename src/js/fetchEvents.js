import { EventAPI } from './eventapi';
import badRequestImg from '../images/catSearch.svg';
const gallery = document.querySelector('.gallery');

export async function fetchEvents(data) {
  const response = await EventAPI.searcEvent(data);
  let eventsArray;
  try {
    eventsArray = { events: response._embedded.events, allData: response };
  } catch (error) {
    gallery.innerHTML = `<p class="header-title">Our cats did not find anything, please change your request or select another country</p><div class="bad--request"><img src="${badRequestImg}}" alt="Our cats did not find anything" width ="400px"/><a class="button" href="index.html">RETURN TO HOME</a></div>`;
  }
  return eventsArray;
}
