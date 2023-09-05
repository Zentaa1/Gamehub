import fetchApi from "../fetchApi.js";
import thisWeeksDeal from "../index/thisWeeksDeal.js";
import main from "../index/actionGames.js";

const url = 'https://api.noroff.dev/api/v1/gamehub';

const game = await fetchApi(url);
