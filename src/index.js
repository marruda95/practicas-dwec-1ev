window.onload = () => {
    console.log('loaded')

    let cells = document.getElementsByClassName('cell')
    let players = document.getElementById('player')
    let newRow
    let turnRow 
    let positionRow 
    let playerRow 
    let count = 0
    let currentPlayer = true
    const wins = [
        // ROWS
        ['1-1', '1-2', '1-3']
    ]
    let player_o = []
    let player_x = []
    let selectedCell
    let table = document.getElementById('movements')
    console.log(currentPlayer)
    for (const cell of cells) {
        cell.onclick = (event) => {
            const [, x, y] = event.target.id.split('-')

            // COUNT TURNS
            count++

            // SAVE SELECTED CELL 
            selectedCell = `${x}-${y}`

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
                player_o.push(selectedCell)
                console.log(player_o)
                playerRow.innerHTML = "O"

                currentPlayer = !currentPlayer
                console.log(currentPlayer)
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
                currentPlayer = !currentPlayer // true
                
                player_x.push(selectedCell)
                console.log(player_x)
                console.log(currentPlayer)
            } 
            
        }  
        
        
        
    }
    // WIN 
    
 
    // RESTART ENTIRE GAME
    restart.onclick = function() {restartGame()} 
    function restartGame() { 
        // REMOVE MOVEMENTS REGISTERS
        table.innerHTML = ""
        // UNMARK CELLS 
        let unmark = document.getElementsByName('unmark')
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
