import fetchApi from '../fetchApi.js';
import { showLoading, hideLoading } from "../loading.js";


export async function actionGameFilter() {
    showLoading();

    try {
        const url = 'https://api.noroff.dev/api/v1/gamehub';
        const gameSection = document.querySelector('.games-gamesection');
        gameSection.innerHTML = "";


        const game = await fetchApi(url);

        const actionGames = game.filter(game => game.genre === 'Action');

        for (let i = 0; i < actionGames.length; i++) {

            showLoading();

            const gameTitleData = actionGames[i].title;
            const gameImgData = actionGames[i].image;
            const gamePriceData = actionGames[i].price;
            const gameDiscountData = actionGames[i].discountedPrice;
            const isOnSale = actionGames[i].onSale;
            const gameId = actionGames[i].id;

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
                gameOldPrice.textContent = gamePriceData + ' USD';
                gameInfo.appendChild(gameOldPrice)
                gamePrice.textContent = gameDiscountData + ' USD';
            } else {
                gamePrice.textContent = gamePriceData + ' USD';
            }
        }
        hideLoading();



    } catch (error) {
        console.log(error);
        window.alert('Something went wrong, Please try again later.');
    }
}

actionGameFilter();