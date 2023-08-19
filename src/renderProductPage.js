// renderProductPage.js
function renderProductPage(data, clickedGameData) {
    const gameInformation = document.querySelector('.games-game');

    if (gameInformation) {
        const gameImg = document.createElement('img');
        gameImg.src = clickedGameData.image;
        gameInformation.appendChild(gameImg);

        console.log(clickedGameData.image);

    } else {
        console.error('.games-game element not found in the DOM');
    }
}

