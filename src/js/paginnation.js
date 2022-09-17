import { createMarkup } from './createMarkup';
import { EventAPI } from './eventapi';
import { getSearchString } from '../index';
export {start};


const guard = document.querySelector('.js-guard');
const list = document.querySelector('.gallery');

const options = {
  root: null,
  rootMargin: '300px',
  treshold: 1,
};
const observer = new IntersectionObserver(handlerLoadMore, options);
let page = 1;
let page_old = 0;
 function start () {
    observer.observe(guard);
}

export async function handlerLoadMore(entries = '') {
   if(page_old != page) {
    page_old = page;
    const resp = await EventAPI.searcEvent(getSearchString(),page);
    if ( page <= resp.page.totalPages) {
        page += 1;
        try {
            list.insertAdjacentHTML('beforeend', createMarkup(resp._embedded.events));
            observer.observe(guard);
        } catch {}
    }
   }
   
}