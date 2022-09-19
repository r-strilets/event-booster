import { fetchEvents } from './fetchEvents';
import { createMarkup } from './createMarkup';
import { createPaginationMarcup } from './paginationNumbers';
const paginationIteam = document.querySelector('.pagination');
const gallery = document.querySelector('.gallery');

export async function searcEventandCreateMarcup(data) {
  let events;
  const response = await fetchEvents(data);
  if (response) {
    events = response.events;
    const totalPages = response.allData.page.totalPages;
    const currentPage = response.allData.page.number;

    paginationIteam.innerHTML = '';
    gallery.innerHTML = createMarkup(events);
    createPaginationMarcup(totalPages, currentPage);
    const currentBTN = document.querySelector(`button[value='${currentPage}']`);
    try {
      currentBTN.classList.add('pagination__btn--current');
    } catch (error) {}
    return events;
  }
}
