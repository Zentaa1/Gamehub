import fetchApi from '../fetchApi.js';
import { showLoading, hideLoading } from "../loading.js";


export async function horrorGameFilter() {
    showLoading();

    try {
        const url = 'https://cms-ca.bjeglerud.com/wp-json/wc/store/products';
        const gameSection = document.querySelector('.games-gamesection');
        gameSection.innerHTML = "";


        const game = await fetchApi(url);

        const horrorGames = game.filter(game => game.categories[0].name === 'Horror');

        for (let i = 0; i < horrorGames.length; i++) {

            showLoading();


            const gameTitleData = horrorGames[i].name;
            const gameImgData = horrorGames[i].images[0].src;
            const gamePriceData = horrorGames[i].prices.regular_price;
            const gameDiscountData = horrorGames[i].prices.sale_price;
            const isOnSale = horrorGames[i].on_sale;
            const gameId = horrorGames[i].id;

            const games = document.createElement('div');
            games.classList.add('games');
            gameSection.appendChild(games);

            const gameLink = document.createElement('a');
            gameLink.setAttribute('href', `gameInformation.html?id=${gameId}`);
            gameLink.setAttribute('data-game-index', i);
            games.appendChild(gameLink);

            const gameImg = document.createElement('img');
            gameImg.src = gameImgData;
            gameLink.appendChild(gameImg);

            const gameInfo = document.createElement('ul');
            games.appendChild(gameInfo);

            const gameTitle = document.createElement('li');
            gameTitle.textContent = gameTitleData;
            gameInfo.appendChild(gameTitle);

            const gamePrice = document.createElement('li');
            gamePrice.classList.add('games-li');
            gameInfo.appendChild(gamePrice);

            if (isOnSale) {
                const gameOldPrice = document.createElement('li');
                gameOldPrice.classList.add('gameOldPrice');
                gameOldPrice.textContent = (gamePriceData / 100) + ' NOK';
                gameInfo.appendChild(gameOldPrice)
                gamePrice.textContent = (gameDiscountData / 100) + ' NOK';
            } else {
                gamePrice.textContent = (gamePriceData / 100) + ' NOK';
            }
        }
        hideLoading();



    } catch (error) {
        console.log(error);
        window.alert('Something went wrong, Please try again later.');
    }
}

horrorGameFilter();