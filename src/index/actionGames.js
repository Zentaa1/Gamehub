import fetchApi from "../fetchApi.js";
import { showLoading, hideLoading } from "../loading.js";

export default async function main() {

        showLoading();

        const url = 'https://api.noroff.dev/api/v1/gamehub';
        const gamesData = await fetchApi(url);

        const actionGames = gamesData.filter(game => game.genre === 'Action');

        for (let i = 0; i < actionGames.length; i++) {
            const gameShowcase = document.querySelector('.main-actiongames');
            const gameId = actionGames[i].id;
            const gameImg = actionGames[i].image;

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