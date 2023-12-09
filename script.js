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

// nextBoardIndex;
var previousBoardIndex = -1;
var currentBoardIndex;
var nextBoardIndex;
var choice = 'O';





function updateCellColor(choice,index) {
     if (choice === 'X') {
        cellList[index].style.backgroundColor = "#BFDB38";        
     }
     if (choice === 'O') {
        cellList[index].style.backgroundColor = "#5ced73";        
     }
}


cellList = document.querySelectorAll("#smallCells")

for (let j = 0; j < 81; j++) {
    
    cellList[j].addEventListener("click",()=>{
        

            currentBoardIndex = previousBoardIndex === -1 ? -1: Math.floor(j/9)
            if (currentBoardIndex === previousBoardIndex && cellList[j].textContent===' ') {
                choice = choice == 'O'? 'X' : 'O';
                
                nextBoardIndex = j % 9

                cellList[j].textContent = choice
                
                updateCellColor(choice,j);

                if(currentBoardIndex!= -1){
                    boardList[currentBoardIndex].style.backgroundColor = "#141a1fbf";
                }

                
                boardList[nextBoardIndex].style.backgroundColor ="#001535fa"  /// next active board
                
                previousBoardIndex = nextBoardIndex;
            }
        
    })  
}

   




