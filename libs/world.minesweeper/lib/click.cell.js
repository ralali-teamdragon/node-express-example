function clickCell(element){
	var position = parseCellId(element.id);
	var row = position[0];
	var column = position[1];

	var grid = document.grid;
	console.log(row, column);
	var clickedCellContent = grid[row][column];
	
	element.innerHTML = ''; // initially clean up inner html content

	var limitRow = (row === grid.length) ? grid.length : row + 1;
	var initRow = (row === 0) ? 0 : row-1;
	var limitCol = (column === grid.length) ? grid.length : column+1;
	var initCol = (column === 0) ? 0 : column-1;

	for (var i = initRow; i <= limitRow; i++) {
		var cellRow = i + 1;
		for (var j = initCol; j <= limitCol; j++) {
			console.log(i, j);
			var cellColumn = j + 1;
			var location = [i,j];
			var bombCount = checkBombAround(grid, location);
			var cellId = "cell-"+cellRow+"x"+cellColumn;
			var cell = document.getElementById(cellId);

			if(bombCount > 0) {
				cell.innerHTML = bombCount;
			}

			var cellContent = grid[i][j];
			if(cellContent === 'bomb'){
				cell.className = "lost";
				cell.innerHTML = '';
			} else {
				cell.className = "safe";
			}
		}
	}
	
	var bombCount = checkBombAround(grid, position);
	console.log(bombCount, 'bombCount');
	if(bombCount > 0) {
		element.innerHTML = bombCount; 
	} else {
		element.innerHTML = '';
	}

	if(clickedCellContent === 'bomb'){
		element.className = "lost";
	} else {
		element.className = "safe";
	}

};

module.exports = clickCell;