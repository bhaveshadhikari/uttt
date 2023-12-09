// append 9 childs in board
// var board = document.getElementById("board");
// for (let index = 0; index < 9; index++) {
//     var newChild = document.createElement('div');
//     newChild.textContent = 'X';
//     newChild.id='smallCells'

//     board.appendChild(newChild);
// }


// alert(document.getElementById('smallCells').innerText)

// append 9 boards in megaboard

var megaBoard = document.getElementById("megaboard");
for (let boardindex = 0; boardindex < 9; boardindex++) {
      
            var smallBoard = document.createElement('div');
            smallBoard.id = 'board'
           
            // var board = document.getElementById('board');
            
            // append 9 child for each board recently appended
          
            for (let index = 0; index < 9; index++) {
                var newChild = document.createElement('div');
                newChild.textContent = ' ';
                newChild.id='smallCells'

                smallBoard.appendChild(newChild);
            }
        megaBoard.appendChild(smallBoard);
}

boardList = document.querySelectorAll("#board") // access by board id

for (let i = 0; i < 9; i++) {
    // boardList[i].style.backgroundColor = "lightblue";

    cellList = document.querySelectorAll("#smallCells")
    for (let j = 0; j < 81; j++) {
        // cellList[j].style.backgroundColor = "lightgreen";  

        cellList[j].addEventListener("click",()=>{
            cellList[j].textContent = 'O'
        })
    }
}



