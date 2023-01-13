window.onload = () => {
    console.log('loaded')

    let cells = document.getElementsByClassName('cell')
    let players = document.getElementById('player')
    let newRow
    let turnRow 
    let positionRow 
    let playerRow 
    let count = 0
    const wins = [
        // ROWS
        ["cell-1-1", "cell-1-2", "cell-1-3"],
        ["cell-2-1", "cell-2-2", "cell-2-3"],
        ["cell-3-1", "cell-3-2", "cell-3-3"],
        // COLUMNS 
        ["cell-1-1", "cell-2-1", "cell-3-1"],
        ["cell-1-2", "cell-2-2", "cell-3-2"],
        ["cell-1-3", "cell-2-3", "cell-3-3"],
        // DIAGONAL
        ["cell-1-1", "cell-2-2", "cell-3-3"],
        ["cell-1-3", "cell-2-2", "cell-3-1"]
    ]
    let player_o = []
    let player_x = []
    let selectedCell = []
   
    for (const cell of cells) {
        let table = document.getElementById('movements')
        
        
        cell.onclick = (event) => {
            const [, x, y] = event.target.id.split('-')
            count++
            selectedCell = `${x}-${y}`

            // When the cell is already being used
            if (cell.className === "cell-x" || cell.className === "cell-o") 
                window.alert("Oops, you can't place it here. You lose a turn!")

            // O
            if (players.className === "turn-cell-o"){
                // PLACE MARKER
                if (cell.className === 'cell')
                    cell.className = 'cell-o'

                // CHANGE PLAYER
                players.classList.remove("turn-cell-o")
                players.classList.add("turn-cell-x")

                // SAVE MOVEMENT
                player_o = [selectedCell]
                console.log(player_o)

                // INSERT MOVEMENT
                newRow = table.insertRow(0)
                playerRow = newRow.insertCell(-1) 
                turnRow = newRow.insertCell(0)
                positionRow = newRow.insertCell(1)

                // FILL INFORMATION
                turnRow.innerHTML = count
                positionRow.innerHTML = selectedCell
                playerRow.innerHTML = "O"
                    
                    
            }
            // X
            else if (players.className === "turn-cell-x"){
                
                if (cell.className === 'cell')
                    cell.className = 'cell-x'

                // CHANGE PLAYER 
                players.classList.remove("turn-cell-x")
                players.classList.add("turn-cell-o")
                player_x = [selectedCell]
                console.log(player_x)

                // INSERT MOVEMENT
                newRow = table.insertRow(0)
                playerRow = newRow.insertCell(-1) 
                turnRow = newRow.insertCell(0)
                positionRow = newRow.insertCell(1)
                
                // FILL INFORMATION
                turnRow.innerHTML = count
                positionRow.innerHTML = selectedCell
                playerRow.innerHTML = "X"
            } 
            // WIN
            // for each win in wins


            // RESTART GAME: all elements purple

            // ADD MOVEMENTS TO LOG:
            // - add placement
            // - add player
            // - add movement number
              
        }        
    }

}
