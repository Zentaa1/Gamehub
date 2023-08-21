import fetchApi from "../fetchApi.js";

const url = 'https://api.noroff.dev/api/v1/gamehub';

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
    console.log(`Spillet denne uka: ${game[index].title}`);

    const isOnSale = game[index].onSale;
    const gameId = game[index].id;

    const weeksGame = document.querySelector('.main-header');

    const weeksGameLink = document.createElement('a');
    weeksGameLink.setAttribute('href', `gameInformation.html?id=${gameId}`);
    weeksGameLink.setAttribute('data-game-index', index);
    weeksGame.appendChild(weeksGameLink);


    const weeksGameImg = document.createElement('img');
    weeksGameImg.src = game[index].image;
    weeksGameLink.appendChild(weeksGameImg);

    const weeksGameInfo = document.createElement('ul');
    weeksGame.appendChild(weeksGameInfo);

    const weeksGameName = document.createElement('li');
    weeksGameName.textContent = game[index].title;
    weeksGameInfo.appendChild(weeksGameName)

    const gamePrice = document.createElement('li');
    gamePrice.classList.add('ping-pong-li');
    weeksGameInfo.appendChild(gamePrice);

    if (isOnSale) {
        const weeksGameOldPrice = document.createElement('li');
        weeksGameOldPrice.classList.add('gameOldPrice');
        weeksGameOldPrice.textContent = game[index].price + ' USD';
        weeksGameInfo.appendChild(weeksGameOldPrice)
        gamePrice.textContent = game[index].discountedPrice + ' USD';
    } else {
        gamePrice.textContent = game[index].price + ' USD';
    }

}
