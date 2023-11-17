import getDataFromLocalStorage from "../getDataFromLocal.js";
import { showLoading, hideLoading } from "../loading.js";


export async function adventureGameFilter() {

    try {
        const gameSection = document.querySelector('.games-gamesection');
        gameSection.innerHTML = "";


        const game = getDataFromLocalStorage();

        const adventureGames = game.filter(game => game.categories[0].name === 'Adventure');

        for (let i = 0; i < adventureGames.length; i++) {


            const gameTitleData = adventureGames[i].name;
            const gameImgData = adventureGames[i].images[0].src;
            const gamePriceData = adventureGames[i].prices.regular_price;
            const gameDiscountData = adventureGames[i].prices.sale_price;
            const isOnSale = adventureGames[i].on_sale;
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
                gameOldPrice.textContent = (gamePriceData / 100) + ' NOK';
                gameInfo.appendChild(gameOldPrice)
                gamePrice.textContent = (gameDiscountData / 100) + ' NOK';
            } else {
                gamePrice.textContent = (gamePriceData / 100) + ' NOK';
            }
        }



    } catch (error) {
        console.log(error);
        window.alert('Something went wrong, Please try again later.');
    }
}

adventureGameFilter();