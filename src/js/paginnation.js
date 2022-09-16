//scroll
import { createMarkup } from './createMarkup';
import { EventAPI } from './eventapi';

const guard = document.querySelector('.js-guard');
const list = document.querySelector('.gallery');

const options = {
  root: null,
  rootMargin: '300px',
  treshold: 1,
};
const observer = new IntersectionObserver(handlerLoadMore, options);
let page = 1;

export async function handlerLoadMore(entries) {
  const resp = await EventAPI.searcEvent();
  list.insertAdjacentHTML('beforeend', createMarkup(resp));
  observer.observe(guard);
  let entry = entries[0];
  if (entry.isIntersecting) {
    page += 1;
  }
  console.log(resp);
  EventAPI(page).then(resp => {
    list.insertAdjacentHTML('beforeend', createMarkup(resp));
    observer.observe(guard);
  });
}
