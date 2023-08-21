import fetchApi from '../fetchApi.js';
import { showLoading, hideLoading } from "../loading.js";


async function games() {

    showLoading();


const url = 'https://api.noroff.dev/api/v1/gamehub';
const gameSection = document.querySelector('.games-gamesection');


const game = await fetchApi(url);

console.log(game)

for (let i = 0; i < game.length; i++) {

    showLoading();

    const gameTitleData = game[i].title;
    const gameImgData = game[i].image;
    const gamePriceData = game[i].price;
    const gameDiscountData = game[i].discountedPrice;
    const isOnSale = game[i].onSale;
    const gameId = game[i].id;

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


    hideLoading();

}

    
}

games();