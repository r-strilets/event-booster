import axios from 'axios';
import { countryCode } from './AllCountry';
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json';
const API_KEY = 'lVBWF1m1jxEC3z9hVtA4qLnJqoOWHAKi';

export class EventAPI {
  static size = 16;
  static page = 0;
  static countryCode = 'US';
  static async searcEvent(query) {
    if (query.trim()) EventAPI.keyword = query;
    const config = {
      params: {
        keyword: query,
        size: EventAPI.size,
        page: EventAPI.page,
        countryCode: EventAPI.countryCode,
        apikey: API_KEY,
      },
    };
    try {
      const response = await axios.get(BASE_URL, config);
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }
}