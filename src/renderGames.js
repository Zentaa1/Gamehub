getApi();

 function renderGames(data) {
  
    const gameSection = document.querySelector('.games-gamesection');
    

    for (let i = 0; i < 10; i++) {

        const gameTitleData = data[i].title;
        const gameImgData = data[i].image;
        const gamePriceData = data[i].price;
        const gameDiscountData = data[i].discountedPrice;
        const isOnSale = data[i].onSale;
        const gameId = data[i].id;

        const games = document.createElement('div');
        games.classList.add('games');
        gameSection.appendChild(games);

        const gameLink = document.createElement('a');
        gameLink.setAttribute('href', `gameInformation.html?id=${gameId}`);
        games.appendChild(gameLink);
        
        gameLink.addEventListener('click', function (event) {
            const clickedGameLink = event.target.closest('a');
            if (clickedGameLink) {
                event.preventDefault();
                const gameIndex = clickedGameLink.dataset.index;
                const clickedGameData = data[gameIndex];
                renderProductPage(clickedGameData);
            }
        });



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
  }

  