export function searchGames(gameData, searchTerm) {
    searchTerm = searchTerm.toLowerCase();
    return gameData.filter(game => game.title.toLowerCase().includes(searchTerm));
}