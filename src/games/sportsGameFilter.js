import fetchApi from '../fetchApi.js';
import { showLoading, hideLoading } from "../loading.js";


export async function sportsGameFilter() {
    showLoading();

    try {
        const url = 'https://api.noroff.dev/api/v1/gamehub';
        const gameSection = document.querySelector('.games-gamesection');
        gameSection.innerHTML = "";


        const game = await fetchApi(url);

        const sportsGames = game.filter(game => game.genre === 'Sports');

        for (let i = 0; i < sportsGames.length; i++) {

            showLoading();

            const gameTitleData = sportsGames[i].title;
            const gameImgData = sportsGames[i].image;
            const gamePriceData = sportsGames[i].price;
            const gameDiscountData = sportsGames[i].discountedPrice;
            const isOnSale = sportsGames[i].onSale;
            const gameId = sportsGames[i].id;

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

sportsGameFilter();