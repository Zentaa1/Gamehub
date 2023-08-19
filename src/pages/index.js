import fetchApi from "../fetchApi.js";
import thisWeeksDeal from "../index/thisWeeksDeal.js";

const url = 'https://api.noroff.dev/api/v1/gamehub';

const game = await fetchApi(url);

console.log(game);