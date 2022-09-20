import { EventAPI } from './eventapi';
import badRequestImg from '../images/catSearch.svg';
const gallery = document.querySelector('.gallery');
const main = document.querySelector('.main');
const failed = document.querySelector('.failed--request');
const paginationIteam = document.querySelector('.pagination');
import { Spinner } from 'spin.js';
const opts = {
  lines: 9, // The number of lines to draw
  length: 0, // The length of each line
  width: 30, // The line thickness
  radius: 34, // The radius of the inner circle
  scale: 1.95, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  speed: 1.2, // Rounds per second
  rotate: 0, // The rotation offset
  animation: 'spinner-line-fade-more', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: 'var(--accent--color)', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  top: '50%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 50px transparent', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'absolute', // Element positioning
};
const spinner = new Spinner(opts).spin(main);
let spin;
export async function fetchEvents(data) {
  gallery.innerHTML = '';
  main.appendChild(spinner.el);
  const response = await EventAPI.searcEvent(data);
  let eventsArray;
  try {
    eventsArray = { events: response._embedded.events, allData: response };
  } catch (error) {}
  if (eventsArray) {
    spin = document.querySelector('.spinner');
    spin.remove();
    failed.innerHTML = '';
  } else {
    paginationIteam.innerHTML = '';
    spin.remove();
    gallery.innerHTML = '';
    failed.innerHTML = `<p class="header-title">Our cats did not find anything, please change your request or select another country</p><div class="bad--request"><img src="${badRequestImg}" alt="Our cats did not find anything" width ="400px"/><a class="button" href="index.html">RETURN TO HOME</a></div>`;
  }
  return eventsArray;
}
