import fetchApi from "../fetchApi.js";
import thisWeeksDeal from "../index/thisWeeksDeal.js";
import main from "../index/actionGames.js";



try {
    const url = 'https://cms-ca.bjeglerud.com/wp-json/wc/store/products';
    const game = await fetchApi(url);
} catch (error){
    console.log(error);
    window.alert('Something went wrong, Please try again later.');
}
