window.onload = () => {
    console.log('loaded')

    let cells = document.getElementsByClassName('cell')
    let players = document.getElementById('player')
    for (const cell of cells) {
        cell.onclick = (event) => {
            const [, x, y] = event.target.id.split('-')
            console.log(`click on ${x}:${y}`)

            // PLAYER O X
            
            // if (player.className === 'turn-cell-o')
                
            
            if (cell.className === 'cell')
                cell.className = 'cell-x'

            if (cell.className === 'cell-x')
                cell.className = 'cell-x'
            
            if (cell.className === 'cell-o')
                cell.className = 'cell-o'


            // else {
            //     if (cell.className === 'cell-o')
            //         cell.className = 'cell-x'
            //     else
            //         cell.className = 'cell-o'
            // }
        }

        // RESTART GAME: all elements purple
        restart.onclick = (event) => {
            cell.className = 'cell'
        }
 }


}
