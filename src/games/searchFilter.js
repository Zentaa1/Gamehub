export function searchGames(gameData, searchTerm) {
    searchTerm = searchTerm.toLowerCase();
    return gameData.filter(game => game.name.toLowerCase().includes(searchTerm));
}