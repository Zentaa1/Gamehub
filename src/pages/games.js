import fetchApi from '../fetchApi.js';
import { displayGames } from '../games/displayGames.js';
import { showLoading, hideLoading } from "../loading.js";
import { allGameFilter } from '../games/allGameFilter.js';
import { actionGameFilter } from '../games/actionGameFilter.js';
import { adventureGameFilter } from '../games/adventureGameFilter.js';
import { sportsGameFilter } from '../games/sportsGameFilter.js';
import { horrorGameFilter } from '../games/horrorGameFilter.js';
import { searchGames } from '../games/searchFilter.js';


async function games() {
    showLoading();

    try {
        const url = 'https://cms-ca.bjeglerud.com/wp-json/wc/store/products';
        const gameSection = document.querySelector('.games-gamesection');
        const searchInput = document.getElementById('searchInput');
        const searchButton = document.getElementById('searchButton');

        let game = await fetchApi(url);

        displayGames(game);

        searchButton.addEventListener('click', () => {
            const searchTerm = searchInput.value.trim();
            const filteredGames = searchGames(game, searchTerm);
            displayGames(filteredGames);
        });
        searchInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                const searchTerm = searchInput.value.trim();
                const filteredGames = searchGames(game, searchTerm);
                displayGames(filteredGames);
            }
        });


        const allGameButton = document.querySelector('.allGameFilter');
        allGameButton.addEventListener('click', () => {
            allGameFilter();
        })

        const actionGameButton = document.querySelector('.actionGameFilter');
        actionGameButton.addEventListener('click', () => {
            actionGameFilter();
        })

        const adventureGameButton = document.querySelector('.adventureGameFilter');
        adventureGameButton.addEventListener('click', () => {
            adventureGameFilter();
        })

        const sportsGameButton = document.querySelector('.sportsGameFilter');
        sportsGameButton.addEventListener('click', () => {
            sportsGameFilter();
        })

        const horrorGameButton = document.querySelector('.horrorGameFilter');
        horrorGameButton.addEventListener('click', () => {
            horrorGameFilter();
        })



    } catch (error) {
        console.log(error);
        window.alert('Something went wrong, Please try again later.');
    }
}

games();