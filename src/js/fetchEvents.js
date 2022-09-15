import axios from 'axios';
import { EventAPI } from './eventapi';

export async function fetchEvents(data) {
  const images = await EventAPI.searcEvent(data);
  const imagesArray = images[0]._embedded.events;
  return imagesArray;
  console.log(images[0]._embedded.events);
}
