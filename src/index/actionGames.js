import getDataFromLocalStorage from "../getDataFromLocal.js";
import { showLoading, hideLoading } from "../loading.js";

export default async function main() {

        showLoading();

        const gamesData = getDataFromLocalStorage();

        const actionGames = gamesData.filter(game => game.categories[0].name === 'Action');

        for (let i = 0; i < actionGames.length; i++) {
            const gameShowcase = document.querySelector('.main-actiongames');
            const gameId = actionGames[i].id;
            const gameImg = actionGames[i].images[0].src;

            const gameShowcaseLink = document.createElement('a');
            gameShowcaseLink.setAttribute('href', `gameInformation.html?id=${gameId}`);
            gameShowcaseLink.setAttribute('data-game-index', i);
            gameShowcase.appendChild(gameShowcaseLink);

            const gameShowcaseImg = document.createElement('img');
            gameShowcaseImg.src = gameImg;
            gameShowcaseLink.appendChild(gameShowcaseImg);

        }

        hideLoading();
        
        
}

main();