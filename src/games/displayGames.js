export function displayGames(game) {
    const gameSection = document.querySelector('.games-gamesection');
    const gameList = document.createElement('ul');
    gameList.classList.add('game-list');

    gameSection.innerHTML = '';

    if (game.length === 0) {
        const noResultsMessage = document.createElement('p');
        noResultsMessage.textContent = 'No matching games found.';
        gameSection.appendChild(noResultsMessage);
    } else {
        game.forEach(game => {
            const isOnSale = game.onSale;

            const games = document.createElement('div');
            games.classList.add('games');
            gameSection.appendChild(games);

            const gameLink = document.createElement('a');
            gameLink.setAttribute('href', `gameInformation.html?id=${game.id}`);
            gameLink.setAttribute('data-game-index', game.id);
            games.appendChild(gameLink);

            const gameImg = document.createElement('img');
            gameImg.src = game.image;
            gameLink.appendChild(gameImg);

            const gameInfo = document.createElement('ul');
            games.appendChild(gameInfo);

            const gameTitle = document.createElement('li');
            gameTitle.textContent = game.title;
            gameInfo.appendChild(gameTitle);

            const gamePrice = document.createElement('li');
            gamePrice.classList.add('games-li');
            gameInfo.appendChild(gamePrice);
            if (isOnSale) {
                const gameOldPrice = document.createElement('li');
                gameOldPrice.classList.add('gameOldPrice');
                gameOldPrice.textContent = game.price + ' USD';
                gameInfo.appendChild(gameOldPrice)
                gamePrice.textContent = game.discountedPrice + ' USD';
            } else {
                gamePrice.textContent = game.price + ' USD';
            }
        });
        gameSection.appendChild(gameList);
    }
}
