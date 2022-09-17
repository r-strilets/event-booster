///////////////---pagination---//////////////

import { EventAPI } from './eventapi';
import { fetchEvents } from './fetchEvents';
import { createMarkup } from './createMarkup';

const gallery = document.querySelector('.gallery');
const paginationIteam = document.querySelector('.pagination');
async function getData(data) {
  let eventsInfo;
  const events = await EventAPI.searcEvent(data);
  try {
    eventsInfo = events;
  } catch (error) {}

  return eventsInfo;
}

async function main() {
  const postsData = await getData('music');

  const rows = 16;
  const totalPages = postsData.page.totalPages;
  let currentPage = postsData.page.number;

  let elemLi = '';
  if (totalPages <= 6) {
    for (i = 0; i < totalPages; i += 1) {
      elemLi += `<li class="pagination__item"><button  class="pagination__btn value="${currentPage}" type="button"
     >${currentPage + 1}</button></li>`;
      currentPage += 1;
    }
  } else if (totalPages > 6) {
    elemLi += `<li class="pagination__item"><button class="pagination__btn value="0" type="button">1</button></li>`;
    for (i = 1; i < 6; i += 1) {
      currentPage += 1;
      elemLi += `<li class="pagination__item"><button class="pagination__btn value="${currentPage}" type="button">${
        currentPage + 1
      }</button></li>`;
    }
    elemLi += `<li class="pagination__item"><button class="pagination__btn type="button">...</button></li>
  <li class="pagination__item"><button class="pagination__btn value="${totalPages}" type="button">${totalPages}</button></li>`;
  }

  paginationIteam.innerHTML = elemLi;
}
main();
paginationIteam.addEventListener('click', oncreateClick);
async function oncreateClick(evt) {
  let page = +evt.target.textContent;
  EventAPI.page = page;

  searcEventandCreateMarcup('');
  console.log(page);
}
async function searcEventandCreateMarcup(data) {
  events = await fetchEvents(data);
  if (events) {
    gallery.innerHTML = createMarkup(events);
  }
}
