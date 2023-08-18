import axios from 'axios';

export class PixabayAPI {
    API_KEY = '38070095-9e6d535b4dc883ad57627f805';// особистий ключ до бібліотеки
    BASE_URL = 'https://pixabay.com/api/';// базова url адреса

 query = null;
 page = 1;

    async fetchPhotos() {
  try {
        const response = await axios.get(
            `${this.BASE_URL}?key=${this.API_KEY}&q=${this.query}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`
        );
        if (!response.status === 200) {
            throw new Error('Помилка при виконанні запиту'); // Штучне створення виклику повернення помилки
        }
        return response.data;
     
    } catch (error) {
        console.log('Сталася помилка під час виконання запиту:');
        throw error; // Прокидуємо помилку далі, якщо потрібно
    }
}
}
