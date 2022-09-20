import { EventAPI } from './js/eventapi';
import { addCountryInSelectList } from './js/AllCountry';
import { createModal } from './js/mainModal';
import { countryCodes } from './js/AllCountry';
import './js/ourModal';
import './js/button';
import { fetchEvents } from './js/fetchEvents';
import { createMarkup } from './js/createMarkup';
import { createPaginationMarcup } from './js/paginationNumbers';
import _debounce from 'debounce';

const paginationIteam = document.querySelector('.pagination');
const gallery = document.querySelector('.gallery');
const mainModal = document.querySelector('.createInfo');
const form = document.querySelector('form');
const formCountryInput = document.querySelector('#myCountry');
const openMainModal = document.querySelector('.modal-backdrop');
const closeMainModal = document.querySelector('.close__modal');
const paginationList = document.querySelector('.pagination');
const searchInput = document.querySelector('.form-input');
const animateModal = document.querySelector('.main-modal');
let inputValue;
let events;
// перший виклик функції
searcEventandCreateMarcup('');
// Додавання країн до випадаючого списку
addCountryInSelectList();
// відслідковування пошукового інпуту
searchInput.addEventListener('input', e => {
  inputValue = e.target.value;
});
// функція пошуку події і створення розмітки
async function searcEventandCreateMarcup(data) {
  const response = await fetchEvents(data);
  if (response) {
    events = response.events;
    const totalPages = response.allData.page.totalPages;
    const currentPage = response.allData.page.number;
    paginationIteam.innerHTML = '';
    EventAPI.page = 0;
    gallery.innerHTML = createMarkup(events);
    createPaginationMarcup(totalPages, currentPage);
    const currentBTN = document.querySelector(`button[value='${currentPage}']`);
    currentBTN.classList.add('pagination__btn--current');
  }
  formCountryInput.value = '';
}
// Виклик для пошуку та рендеру карток за запитом у інпуті
form.addEventListener('submit', e => {
  e.preventDefault();
  EventAPI.page = 0;
  searcEventandCreateMarcup(inputValue);
});
// Оновлення сторінки за країною
function refreshCountry(countryInput) {
  const country = countryCodes.filter(
    query =>
      query.name.toLowerCase() === countryInput.target.value.toLowerCase()
  );
  if (countryInput.target.value) {
    const countryCode = country[0].code;
    EventAPI.countryCode = countryCode;
  } else if (!countryInput.target.value) {
    EventAPI.countryCode = '';
  }
  searcEventandCreateMarcup(inputValue);
}
// виклик функції оновлення за країною.
formCountryInput.addEventListener('input', _debounce(refreshCountry, 1000));
// Функція для зміни сторінки пошуку за допомогою пагінації
paginationList.addEventListener('click', evt => {
  if (evt.target.type === 'button') {
    EventAPI.page = evt.target.value;
    searcEventandCreateMarcup(inputValue);
  }
});
// рендер модального вікна по тицю на картку події
gallery.addEventListener('click', card => {
  let eventsID;
  if (card.target.closest('.gallery__item')) {
    const eventCardID = card.target.closest('.gallery__item').id;
    eventsID = events.filter(event => event.id === eventCardID);
  } else {
    return;
  }
  if (events) {
    openMainModal.removeAttribute('hidden');
    mainModal.innerHTML = createModal(eventsID);
    document.addEventListener('keydown', closeModal);
    const bodyForBcdrop = document.querySelector('body');
    bodyForBcdrop.classList.add('no-scroll');
    if (eventsID[0].priceRanges) {
      const btnToBuy = document.querySelectorAll('.buy__button');
      btnToBuy.forEach(btn =>
        btn.addEventListener('click', resp => {
          window.open(`${eventsID[0].url}`);
        })
      );
    }
    openMainModal.addEventListener('click', onBackdropClick);
    function onBackdropClick(e) {
      if (e.target === e.currentTarget) {
        bodyForBcdrop.classList.remove('no-scroll');
        openMainModal.setAttribute('hidden', 'true');
        document.removeEventListener('keydown', closeModal);
      }
    }
    closeMainModal.addEventListener('click', () => {
      openMainModal.setAttribute('hidden', 'true');
      bodyForBcdrop.classList.remove('no-scroll');
      document.removeEventListener('keydown', closeModal);
    });
    function closeModal(e) {
      if (e.code === 'Escape') {
        openMainModal.setAttribute('hidden', 'true');
        bodyForBcdrop.classList.remove('no-scroll');
        document.removeEventListener('keydown', closeModal);
      }
    }
  }
  const modalButton = document.querySelector('.info__button');
  modalButton.addEventListener('click', googleSearch);

  function googleSearch(resp) {
    window.open(`https://www.google.com/search?q=${eventsID[0].name}`);
  }
});
