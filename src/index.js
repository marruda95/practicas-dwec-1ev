
let unmark = document.getElementsByName('unmark')
window.onload = () => {
    console.log('loaded')
    let cells = document.getElementsByClassName('cell')
    let players = document.getElementById('player')
    let table = document.getElementById('movements')
    let newRow
    let turnRow 
    let positionRow 
    let playerRow 
    let count = 0
    let selectedCell

    for (const cell of cells) {
        cell.onclick = (event) => {
            const x = event.target.id
            
            // COUNT TURNS
            count++

            // SAVE SELECTED CELL 
            selectedCell = `${x}`

            // INSERT MOVEMENT ROW
            newRow = table.insertRow(0)
            playerRow = newRow.insertCell(-1) 
            turnRow = newRow.insertCell(0)
            positionRow = newRow.insertCell(1)
            turnRow.innerHTML = count
            positionRow.innerHTML = selectedCell
            
            // CELL IS ALREADY MARKED
            if (cell.className === "cell-x" || cell.className === "cell-o") {
                window.alert("Oops, you can't place it here. You lose a turn!")
                positionRow.innerHTML = "Skipped"
            }

        
            // PLAYRER O
            if (players.className === "turn-cell-o"){
                // PLACE MARKER
                if (cell.className === 'cell')
                    cell.className = 'cell-o'

                // CHANGE PLAYER
                players.classList.remove("turn-cell-o")
                players.classList.add("turn-cell-x")

                // SAVE MOVEMENT
                playerRow.innerHTML = "O" 
            }

            // PLAYER X
            else if (players.className === "turn-cell-x"){
                
                // PLACE MARKER
                if (cell.className === 'cell')
                    cell.className = 'cell-x'

                // CHANGE PLAYER 
                players.classList.remove("turn-cell-x")
                players.classList.add("turn-cell-o")
                
                playerRow.innerHTML = "X"  
    
            } 

            checkWin();
            
        }  
        
    }
 
    // RESTART ENTIRE GAME
    restart.onclick = function() {restartGame()} 
    function restartGame() { 
        // REMOVE MOVEMENTS REGISTERS
        table.innerHTML = ""
        unmark.forEach(cell => {
            cell.classList.remove("cell-o")
            cell.classList.remove("cell-x")
            cell.classList.add("cell")
        })
        // RESTART COUNT
        count = 0
        // CHANGE PLAYER TO X
        players.className = "turn-cell-x"
    }

}


function checkWin(){
    let winningCombinations = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,4,7],
        [2,5,8],
        [3,6,9],
        [1,5,9],
        [3,5,7]
    ]
     for (i = 0; i < winningCombinations.length; i++){

        let cell1 = document.getElementById(winningCombinations[i][0]).className
        let cell2 = document.getElementById(winningCombinations[i][1]).className
        let cell3 = document.getElementById(winningCombinations[i][2]).className
        
        if (cell1 === "cell-x"){
            if (cell2 === "cell-x"){
                if (cell3 == "cell-x"){
                    window.alert("HA GANADO X")
                    
                }
            }
        }

        if (cell1 === "cell-o"){
            if (cell2 === "cell-o"){
                if (cell3 == "cell-o"){
                    window.alert("HA GANADO O")
                    
                }
            }
        }
    }    
}

