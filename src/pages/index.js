import fetchApi from "../fetchApi.js";
import thisWeeksDeal from "../index/thisWeeksDeal.js";
import main from "../index/actionGames.js";



try {
    const url = 'https://api.noroff.dev/api/v1/gamehub';
    const game = await fetchApi(url);
} catch (error){
    console.log(error);
    window.alert('Something went wrong, Please try again later.');
}
