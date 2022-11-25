function placementMines(nbMines) {
    let listeMines = [];
    listeMines.length = nbMines;

    for (let i = 0; i < nbMines; i++) {
        listeMines[i] = Math.floor(Math.random() * 81);
    }
    let listeMinesCheck = [...new Set(listeMines)];
    console.log("liste avant " + listeMines);
    console.log("liste check avant " + listeMinesCheck);

    if (listeMines.length !== listeMinesCheck.length) {
        placementMines(nbMines);
    } else {
        console.log("liste apres " + listeMines);
        return listeMines;
    }
}

placementMines(10)