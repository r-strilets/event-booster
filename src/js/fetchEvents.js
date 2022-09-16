import { EventAPI } from './eventapi';

export async function fetchEvents(data) {
  const events = await EventAPI.searcEvent(data);
  let eventsArray;
  try {
    eventsArray = events._embedded.events;
  } catch (error) {
    window.alert('Жодного Івенту не знайдено');
  }
  return eventsArray;
}