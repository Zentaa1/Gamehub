async function getApi() {
    try {

    const url = 'https://api.noroff.dev/api/v1/gamehub';
        
    const response = await fetch(url);
    const data = await response.json();

    renderGames(data);
    renderProductPage(data);

    }
    catch (error) {
        console.log(error);
    }

}