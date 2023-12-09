var ultimate_board = [
    [' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' '],
]
var completed = false
var trackBoard =  [' ',' ',' ',' ',' ',' ',' ',' ',' ']
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

function updateBoard(boardIndex,cellIndex,choice ){
    // alert(boardIndex);
    // alert(cellIndex);
    ultimate_board[boardIndex][cellIndex] = choice
    // console.log(ultimate_board)
}

function deleteChildrenIfWon(boardIndex,choice){
    boardList[boardIndex].textContent = choice;
    if (choice === 'X') {
        // alert('color updated')
        board[boardIndex].style.backgroundColor = "#BFDB38" ;
     }
     if (choice === 'O') {
        boardList[boardIndex].style.backgroundColor = "#5ced73";        
     }
}



function hasWon(testBoard, choice){

    switch (true) {
        case (testBoard[0] === testBoard[1] && testBoard[1] === testBoard[2] && testBoard[2] === choice):
        case (testBoard[3] === testBoard[4] && testBoard[4] === testBoard[5] && testBoard[5] === choice):
        case (testBoard[6] === testBoard[7] && testBoard[7] === testBoard[8] && testBoard[8] === choice):
        case (testBoard[0] === testBoard[3] && testBoard[3] === testBoard[6] && testBoard[6] === choice):
        case (testBoard[1] === testBoard[4] && testBoard[4] === testBoard[7] && testBoard[7] === choice):
        case (testBoard[2] === testBoard[5] && testBoard[5] === testBoard[8] && testBoard[8] === choice):
        case (testBoard[0] === testBoard[4] && testBoard[4] === testBoard[8] && testBoard[8] === choice):
        case (testBoard[2] === testBoard[4] && testBoard[4] === testBoard[6] && testBoard[6] === choice):
            return true;
        
        default:
            return false;
    }

}

function updateTrackBoard(boardIndex,choice) {
    trackBoard[boardIndex] = choice;
    // console.log(trackBoard)
    if (hasWon(trackBoard,choice)){
        completed = true;
        notifier.textContent = choice + " won the game !!"
        notifier.style.color = 	"#00f9ff";
    }else{
        checkTie();
    }
}

function checkTie(){
    if (trackBoard.every(cell => cell !== " ")) {
        var countX = trackBoard.filter(cell => cell === 'X').length;
        var countO = trackBoard.filter(cell => cell === 'O').length;
        completed = true

        let winner = countX > countO ? 'X' : 'O';

        notifier.textContent = winner + " won the game cardinally!!"
        notifier.style.color = 	"#00f9ff";
    }
}

function smallBoardHasWon(boardIndex,choice){
    currBoard = ultimate_board[boardIndex]

    if (hasWon(currBoard,choice)) {
      
        deleteChildrenIfWon(boardIndex,choice);
        updateTrackBoard(boardIndex,choice);
        
    }
}
var notifier = document.getElementById('notifier')
// x's turn
function updateNotifer(choice){
notifier.textContent = choice + "'s turn"
notifier.style.color = choice === 'X' ? "#BFDB38" : "#5ced73"; 
}

cellList = document.querySelectorAll("#smallCells")

for (let j = 0; j < 81; j++) {
    // updateNotifer(choice);
    cellList[j].addEventListener("click",()=>{
        
            // alert(j);
            

            currentBoardIndex = previousBoardIndex === -1 ? -1: Math.floor(j/9)
            
            
            if (currentBoardIndex === previousBoardIndex && cellList[j].textContent===' ' && !completed) {
                
                nextBoardIndex = j % 9

                cellList[j].textContent = choice
                
                

                if(currentBoardIndex!= -1){
                    boardList[currentBoardIndex].style.backgroundColor = "#141a1fbf";
                }

                updateCellColor(choice,j);
                updateBoard(parseInt(j/9),(j%9),choice);
                
                nextTurn = choice == 'O'? 'X' : 'O'
                updateNotifer(nextTurn);

                if(smallBoardHasWon(parseInt(j/9),choice)){
                    deleteChildrenIfWon(parseInt(j/9),choice)
                }

                // alert(nextBoardIndex)
                if (boardList[nextBoardIndex].childElementCount != 0) {
                  
                    boardList[nextBoardIndex].style.backgroundColor ="#001535fa"  /// next active board
                
                    previousBoardIndex = nextBoardIndex;

                } else {
                        previousBoardIndex = -1 // can make ma move to any cells
                }

                choice = choice == 'O'? 'X' : 'O';
                
            }
    })  
}
