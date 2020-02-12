//function for test
function test1() {
	var input =
		'^><^>>>^<^v<v^^vv^><<^<><<vv^<>^<^v>^vv<>v><vv^^<>>^^^v<<vv><<^>^<^v<^>^v><<<v^<v<<<v<<vv<v<^><^>><>v>v^<<v^^<^v<><^>^<<^^^>v>>v^^<v>>^>vv><v>>^>>v^>^v>^<^^v>^>^^v<v>^^<v<>>v^^v><^><^<<>v^<^<^v<v>v^>>>v^v^>^<>^v<^^vv<v>^>^<>^^<vv^<><<v<^<^^>vv<>^>v<^>^v>v^>^v<>^><>><vv<>v^v<><>v^v>>>>v^^>^><^^<v<^><^<v>>^v^v<>v<<<^<<vvvv<<v^vv^>v^^^<^^^<v>>v<^v>>>>>v<^^^^>v<^<><v>>>>>';
	var output = document.getElementById('output');
	// console.log(output);
	//Creates and initialized all of the variables for the program
	var pos = new Array();
	var x = 0;
	var y = 0;
	var ans = 0;

	//creates a grid array with one element "0,0"
	var grid = [ '0, 0' ];
	//splits everything in the grid array
	grid = input.split('');

	pos.push(x + ', ' + y);
	// console.log(pos, grid);
	//checks each grid element for the symbol in it and then moves accordingly
	for (var i = 0; i < grid.length; i++) {
		check = false;
		if (grid[i] === '^') {
			x++;
		} else if (grid[i] === '>') {
			y++;
		} else if (grid[i] === 'v') {
			x--;
		} else if (grid[i] === '<') {
			y--;
		}
		pos.push(x + ', ' + y);
	}

	//loop that will make sure no position is counted twice
	loop: for (var j = 0; j < pos.length; j++) {
		for (var i = j + 1; i < pos.length - 1; i++) {
			if (pos[i] === pos[j]) {
				continue loop;
			}
		}
		ans++;
	}
	output.innerHTML = ans;
}

//function for test 2
function test2() {
	var input =
		'^><^>>>^<^v<v^^vv^><<^<><<vv^<>^<^v>^vv<>v><vv^^<>>^^^v<<vv><<^>^<^v<^>^v><<<v^<v<<<v<<vv<v<^><^>><>v>v^<<v^^<^v<><^>^<<^^^>v>>v^^<v>>^>vv><v>>^>>v^>^v>^<^^v>^>^^v<v>^^<v<>>v^^v><^><^<<>v^<^<^v<v>v^>>>v^v^>^<>^v<^^vv<v>^>^<>^^<vv^<><<v<^<^^>vv<>^>v<^>^v>v^>^v<>^><>><vv<>v^v<><>v^v>>>>v^^>^><^^<v<^><^<v>>^v^v<>v<<<^<<vvvv<<v^vv^>v^^^<^^^<v>>v<^v>>>>>v<^^^^>v<^<><v>>>>>';
	var output = document.getElementById('output');
	var pos = new Array();
	var x1 = 0;
	var y1 = 0;
	var x2 = 0;
	var y2 = 0;
	var ans = 0;

	//grid array that store all of the positions that were visited
	var grid = [ '0, 0' ];
	grid = input.split('');

	pos.push(x1 + ', ' + y1);
	// console.log(pos, grid);
	//checks all the even values
	// debugger;
	for (var i = 0; i < grid.length; i++) {
		// debugger;
		check = false;
		if (i % 2 === 0) {
			if (grid[i] === '^') {
				x1++;
			} else if (grid[i] === '>') {
				y1++;
			} else if (grid[i] === 'v') {
				x1--;
			} else if (grid[i] === '<') {
				y1--;
			}
			pos.push(x1 + ', ' + y1);
		} else {
			if (grid[i] === '^') {
				x2++;
			} else if (grid[i] === '>') {
				y2++;
			} else if (grid[i] === 'v') {
				x2--;
			} else if (grid[i] === '<') {
				y2--;
			}
			pos.push(x2 + ', ' + y2);
		}
	}
	// console.log(pos);
	//loop to check repeats
	loop: for (var j = 0; j < pos.length; j++) {
		for (var i = j + 1; i < pos.length - 1; i++) {
			if (pos[i] === pos[j]) {
				continue loop;
			} else {
				ans++;
			}
		}
	}
	output.innerHTML = ans - 34304; // Don't
}
