export default async function fetchApi(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

const url = 'https://cms-ca.bjeglerud.com/wp-json/wc/store/products';
fetchApi(url)
    .then(data => {
        localStorage.setItem('games', JSON.stringify(data));
    })
    .catch(error => {
        console.error('Error fetching and storing data:', error);
    });
