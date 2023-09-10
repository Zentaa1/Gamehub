import fetchApi from '../fetchApi.js';
import { userReview } from '../ProductPage/userReviews.js';
import { showLoading, hideLoading } from "../loading.js";

async function productPage() {
    showLoading();

    try {
    const url = 'https://api.noroff.dev/api/v1/gamehub';
    const data = await fetchApi(url);


    const gameSection = document.querySelector('.games-game')
    const gameAbout = document.querySelector('.games-about')

    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get('id');

    const game = data.find((game) => game.id === id);

    const gameImg = document.createElement('img');
    gameImg.src = game.image;
    gameSection.appendChild(gameImg);

    const gameInfo = document.createElement('div');
    gameSection.appendChild(gameInfo);

    const gameName = document.createElement('h1');
    gameName.textContent = game.title;
    gameInfo.appendChild(gameName);

    const gameDesc = document.createElement('p');
    gameDesc.classList.add('game_desc');
    gameDesc.textContent = game.description;
    gameInfo.appendChild(gameDesc);


    const isOnSale = game.onSale;

    const gamePrice = document.createElement('h2');
    gameInfo.appendChild(gamePrice);

    if (isOnSale) {
        const gameOldPrice = document.createElement('h2');
        gameOldPrice.classList.add('gameOldPrice');
        gameOldPrice.textContent = game.price + ' USD';
        gameInfo.appendChild(gameOldPrice)
        gamePrice.textContent = game.discountedPrice + ' USD';
    } else {
        gamePrice.textContent = game.price + ' USD';
    }

    const addToCartBtn = document.createElement('a');
    addToCartBtn.classList.add('add-to-cart');
    addToCartBtn.textContent = 'Add to Cart';
    addToCartBtn.setAttribute('href', 'checkout.html');
    gameInfo.appendChild(addToCartBtn);

    const stackedReviews = document.createElement('div');
    stackedReviews.classList.add('stackedReview');
    gameAbout.appendChild(stackedReviews)

    userReview.forEach((review) => {
        const gameReview = document.createElement('div');
        gameReview.classList.add('games-item', 'games-review');
        gameAbout.appendChild(gameReview);

        const reviewHeader = document.createElement('p');
        reviewHeader.classList.add('review-head');
        const reviewName = document.createElement('p');
        reviewName.classList.add('review-by');
        const reviewComment = document.createElement('p');
        reviewComment.classList.add('review-content');

        reviewHeader.textContent = review.header;
        reviewName.textContent = review.name;
        reviewComment.textContent = review.comment;

        gameReview.append(reviewHeader, reviewName, reviewComment);
    });

    hideLoading();
    } catch (error) {
        console.log(error);
    }

    

}

productPage()



