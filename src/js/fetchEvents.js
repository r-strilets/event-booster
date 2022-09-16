import { EventAPI } from './eventapi';

export async function fetchEvents(data) {
  const images = await EventAPI.searcEvent(data);
  let imagesArray;
  try {
    imagesArray = images._embedded.events;
  } catch (error) {
    window.alert(`${error.message} Жодного Івенту не знайдено`);
  }
  return imagesArray;
}
