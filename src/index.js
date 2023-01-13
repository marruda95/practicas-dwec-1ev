window.onload = () => {
    console.log('loaded')

    let cells = document.getElementsByClassName('cell')
    let players = document.getElementById('player')
   
    for (const cell of cells) {
        cell.onclick = (event) => {
            const [, x, y] = event.target.id.split('-')
            console.log(`click on ${x}:${y}`)

            // When the cell is already being used
            if (cell.className === "cell-x" || cell.className === "cell-o") 
                window.alert("Oops, you can't place it here. You lose a turn!")

            // O
            if (players.className === "turn-cell-o"){
                if (cell.className === 'cell')
                    cell.className = 'cell-o'
                    players.classList.remove("turn-cell-o")
                    players.classList.add("turn-cell-x")
            }
            // X
            else if (players.className === "turn-cell-x"){
                if (cell.className === 'cell')
                    cell.className = 'cell-x'
                    players.classList.remove("turn-cell-x")
                    players.classList.add("turn-cell-o")
            } 
            
            // RESTART GAME: all elements purple
            
           
            
        }        
    }

}
