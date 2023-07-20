import axios from 'axios';
const baseUrl = 'https://dummyjson.com/products/search?q=';

export default function searchQuery(query: string) {
    return axios({
        method: 'get',
        url: `${baseUrl}${query}`,
    }).then((response) => {
        return response.data;
    });
} 