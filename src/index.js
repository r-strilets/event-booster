import './js/createMarkup';
import { EventAPI } from './js/eventapi';
import { addCountryInSelectList } from './js/AllCountry';
import { createModal } from './js/mainModal';
import { countryCodes } from './js/AllCountry';
import badRequestImg from './images/catSearch.svg';
import './js/ourModal';
import './js/button';
import './js/paginationNumbers';
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

// відслідковування пошукового інпуту
const searchInput = document.querySelector('.form-input');
let inputValue;
searchInput.addEventListener('input', e => {
  inputValue = e.target.value;
});

let events;
async function searcEventandCreateMarcup(data) {
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
  }
  formCountryInput.value = '';
}
// перший виклик функції
searcEventandCreateMarcup('');
// Додавання країн до випадаючого списку
addCountryInSelectList();
// Функція для зміни сторінки пошуку за допомогою пагінації
const paginationList = document.querySelector('.pagination');
paginationList.addEventListener('click', e => {
  if (e.target.type === 'button') {
    EventAPI.page = e.target.value;
    searcEventandCreateMarcup(inputValue);
  }
});

// Виклик для пошуку та рендеру карток за запитом у інпуті
form.addEventListener('submit', e => {
  e.preventDefault();
  EventAPI.page = 0;
  searcEventandCreateMarcup(inputValue);
});
// Оновлення сторінки за країною
function refreshCountry(e) {
  const country = countryCodes.filter(
    request => request.name.toLowerCase() === e.target.value.toLowerCase()
  );
  try {
    if (e.target.value) {
      const countryCode = country[0].code;
      EventAPI.countryCode = countryCode;
    } else if (!e.target.value) {
      EventAPI.countryCode = '';
    }
    searcEventandCreateMarcup(inputValue);
  } catch (error) {
    paginationIteam.innerHTML = '';
    gallery.innerHTML = `<p class="header-title">Our cats did not find anything, please change your request or select another country</p><div class="bad--request"><img src="${badRequestImg}}" alt="Our cats did not find anything" width ="400px"/><a class="button" href="index.html">RETURN TO HOME</a></div>`;
  }
}
formCountryInput.addEventListener('input', _debounce(refreshCountry, 1000));

gallery.addEventListener('click', e => {
  e.preventDefault();
  const eventCardID = e.target.closest('.gallery__item').id;
  const eventsID = events.filter(event => event.id === eventCardID);
  if (events) {
    openMainModal.removeAttribute('hidden');
    mainModal.innerHTML = createModal(eventsID);
    const bodyForBcdrop = document.querySelector('body');
    bodyForBcdrop.classList.add('no-scroll');

    openMainModal.addEventListener('click', onBackdropClick);
    function onBackdropClick(e) {
      e.preventDefault();
      if (e.target === e.currentTarget) {
        bodyForBcdrop.classList.remove('no-scroll');
        openMainModal.setAttribute('hidden', 'true');
      }
    }
    closeMainModal.addEventListener('click', e => {
      e.preventDefault(), openMainModal.setAttribute('hidden', 'true');
      bodyForBcdrop.classList.remove('no-scroll');
    });
  }
  const modalButton = document.querySelector('.info__button');
  modalButton.addEventListener('click', googleSearch);

  function googleSearch(resp) {
    window.open(`https://www.google.com/search?q=${eventsID[0].name}`);
  }
});
