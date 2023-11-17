export default function getDataFromLocalStorage() {
    const gameData = JSON.parse(localStorage.getItem('games'));
    return gameData;
}