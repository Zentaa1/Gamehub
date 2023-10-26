import fetchApi from "../fetchApi.js";

const url = 'https://cms-ca.bjeglerud.com/wp-json/wc/store/products';

fetchApi(url)
    .then(game => {
        const mSecPerWeek = 7 * 24 * 60 * 60 * 1000;
        let i = 0;

        thisWeeksDeal(game, i);

        setInterval(() => {
            i = (i + 1) % game.length;
            thisWeeksDeal(game, i);
        }, mSecPerWeek);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

export default function thisWeeksDeal(game, index) {

    const isOnSale = game[index].onSale;
    const gameId = game[index].id;

    const weeksGame = document.querySelector('.main-header');

    const weeksGameLink = document.createElement('a');
    weeksGameLink.setAttribute('href', `gameInformation.html?id=${gameId}`);
    weeksGameLink.setAttribute('data-game-index', index);
    weeksGame.appendChild(weeksGameLink);


    const weeksGameImg = document.createElement('img');
    weeksGameImg.src = game[index].images[index].src;
    weeksGameLink.appendChild(weeksGameImg);

    const weeksGameInfo = document.createElement('ul');
    weeksGame.appendChild(weeksGameInfo);

    const weeksGameName = document.createElement('li');
    weeksGameName.textContent = game[index].name;
    weeksGameInfo.appendChild(weeksGameName)

    const gamePrice = document.createElement('li');
    gamePrice.classList.add('ping-pong-li');
    weeksGameInfo.appendChild(gamePrice);

    if (isOnSale) {
        const weeksGameOldPrice = document.createElement('li');
        weeksGameOldPrice.classList.add('gameOldPrice');
        weeksGameOldPrice.textContent = (game[index].prices.price / 100) + ' NOK';
        weeksGameInfo.appendChild(weeksGameOldPrice)
        gamePrice.textContent = (game[index].discountedPrice / 100) + ' NOK';
    } else {
        gamePrice.textContent = (game[index].prices.price / 100) + ' NOK';
    }

}
