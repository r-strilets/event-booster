import { EventAPI } from './eventapi';
const gallery = document.querySelector('.gallery');

export async function fetchEvents(data) {
  const response = await EventAPI.searcEvent(data);
  let eventsArray;
  try {
    eventsArray = { events: response._embedded.events, allData: response };
  } catch (error) {
    gallery.innerHTML =
      '<img src="./images/catSearch.svg" alt="Жодного Івенту не знайдено" /><p class="header-title">Our cats did not find anything, please change your request or select another country</p>';
  }
  return eventsArray;
}
