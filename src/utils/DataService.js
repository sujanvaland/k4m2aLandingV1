import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

class DataService {
  constructor() {
    this.api = axios.create({
      baseURL: API_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  get(url, config = {}) {
    return this.api.get(url, config);
  }

  post(url, data, config = {}) {
    return this.api.post(url, data, config);
  }

  // You can add more methods (put, delete, etc.) as needed
}

const dataService = new DataService();
export default dataService; 