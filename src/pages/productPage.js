import fetchApi from '../fetchApi.js';
import { userReview } from '../ProductPage/userReviews.js';
import { showLoading, hideLoading } from '../loading.js';

async function productPage() {
    showLoading();

    try {
        const url = 'https://cms-ca.bjeglerud.com/wp-json/wc/store/products';
        const data = await fetchApi(url);

        const gameSection = document.querySelector('.games-game');
        const gameAbout = document.querySelector('.games-about');

        const queryString = document.location.search;
        const params = new URLSearchParams(queryString);
        const id = params.get('id');

        const game = data.find((game) => game.id == id);

        if (game) {
            const gameImg = document.createElement('img');
            if (game.images && game.images.length > 0) {
                gameImg.src = game.images[0].src;
                gameSection.appendChild(gameImg);
            } else {
                console.log('No images available for this game.');
            }

            const gameInfo = document.createElement('div');
            gameSection.appendChild(gameInfo);

            const gameName = document.createElement('h1');
            gameName.textContent = game.name;
            gameInfo.appendChild(gameName);


            const gameDesc = document.createElement('p');
            gameDesc.classList.add('game_desc');
            gameDesc.textContent = game.attributes[0].terms[0].name;
            gameInfo.appendChild(gameDesc);

            const isOnSale = game.on_sale;

            const gamePrice = document.createElement('h2');
            gameInfo.appendChild(gamePrice);

            if (isOnSale) {
                const gameOldPrice = document.createElement('h2');
                gameOldPrice.classList.add('gameOldPrice');
                gameOldPrice.textContent = (game.prices.regular_price / 100) + ' NOK';
                gameInfo.appendChild(gameOldPrice);
                gamePrice.textContent = (game.prices.sale_price / 100) + ' NOK';
            } else {
                gamePrice.textContent = (game.prices.regular_price / 100) + ' NOK';
            }

            const addToCartBtn = document.createElement('a');
            addToCartBtn.classList.add('add-to-cart');
            addToCartBtn.textContent = 'Add to Cart';

            addToCartBtn.addEventListener('click', async (event) => {
                window.location.href = 'cart.html';
            });

            gameInfo.appendChild(addToCartBtn);

            const stackedReviews = document.createElement('div');
            stackedReviews.classList.add('stackedReview');
            gameAbout.appendChild(stackedReviews);

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
        } else {
            console.log('Game with the specified ID was not found.');
        }
    } catch (error) {
        console.log(error);
        window.alert('Something went wrong. Please try again later.');
    }

    hideLoading();
}

productPage();
