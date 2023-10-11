import fetchApi from "../fetchApi.js";
import { showLoading, hideLoading } from "../loading.js";


export async function adventureGameFilter() {
    showLoading();

    try {
        const url = 'https://api.noroff.dev/api/v1/gamehub';
        const gameSection = document.querySelector('.games-gamesection');
        gameSection.innerHTML = "";


        const game = await fetchApi(url);

        const adventureGames = game.filter(game => game.genre === 'Adventure');

        for (let i = 0; i < adventureGames.length; i++) {

            showLoading();

            const gameTitleData = adventureGames[i].title;
            const gameImgData = adventureGames[i].image;
            const gamePriceData = adventureGames[i].price;
            const gameDiscountData = adventureGames[i].discountedPrice;
            const isOnSale = adventureGames[i].onSale;
            const gameId = adventureGames[i].id;

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

adventureGameFilter();