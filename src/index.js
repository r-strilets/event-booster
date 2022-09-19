import './js/createMarkup';
import { fetchEvents } from './js/fetchEvents';
import { EventAPI } from './js/eventapi';
import { createMarkup } from './js/createMarkup';
import { addCountryInSelectList } from './js/AllCountry';
import { createModal } from './js/mainModal';
// import { oncreateClick } from './js/paginationNumbers';
import { createPaginationMarcup } from './js/paginationNumbers';
import './js/ourModal';

import './js/search';
import './js/button';
import './js/paginationNumbers';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('form');
const mainModal = document.querySelector('.createInfo');
const openMainModal = document.querySelector('.modal-backdrop');
const closeMainModal = document.querySelector('.close__modal');

// перший віклик функції
searcEventandCreateMarcup('music');
let events;
// Додавання країн до випадаючого списку
addCountryInSelectList();
// функція для пошуку та створення карток з івентами
async function searcEventandCreateMarcup(data) {
  const response = await fetchEvents(data);
  events = response.events;
  const totalPages = response.allData.page.totalPages;
  const currentPage = response.allData.page.number;
  if (events) {
    gallery.innerHTML = createMarkup(events);
    createPaginationMarcup(totalPages, currentPage);
    const currentBTN = document.querySelector(`button[value='${currentPage}']`);
    // console.log(currentBTN);
    currentBTN.classList.add('pagination__btn--current');
  }
}
// Функція для зміни сторінки пошуку за допомогою пагінації
const paginationList = document.querySelector('.pagination');
paginationList.addEventListener('click', e => {
  EventAPI.page = e.target.value;
  searcEventandCreateMarcup('');
});
// Виклик для пошуку та рендеру карток за запитом у інпуті
form.addEventListener('submit', e => {
  e.preventDefault();
  EventAPI.page = 0;
  const countryCode = e.currentTarget.country.value;
  if (e.currentTarget.country.value !== 'default') {
    // EventAPI.page = e.target.value;
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
    openMainModal.removeAttribute('hidden');
    mainModal.innerHTML = createModal(eventsID);
    // console.log(resp.images);
    const bodyForBcdrop = document.querySelector('body');
    bodyForBcdrop.classList.add('no-scroll');

    openMainModal.addEventListener('click', onBackdropClick);
    function onBackdropClick(e) {
      e.preventDefault();
      if (e.target === e.currentTarget) {
        console.dir(e);
        bodyForBcdrop.classList.remove('no-scroll');
        openMainModal.setAttribute('hidden', 'true');
      }
    }
    closeMainModal.addEventListener('click', e => {
      e.preventDefault(), openMainModal.setAttribute('hidden', 'true');
      bodyForBcdrop.classList.remove('no-scroll');
    });
  }
  console.dir(eventsID);
  const modalButton = document.querySelector('.info__button');
  modalButton.addEventListener('click', googleSearch);

  function googleSearch(resp) {
    window.open(`https://www.google.com/search?q=${eventsID[0].name}`);
  }

  if (eventsID[0].priceRanges) {
    const btnToBuy = document.querySelector('.buy__button');
    btnToBuy.addEventListener('click', infoSearch);
    function infoSearch(resp) {
      console.dir(eventsID);
      window.open(`${eventsID[0].url}`);
    }
  }

  // console.log(eventcard.dataset.id);
  // console.log(e.currentTarget);
  // createModal();
});
