function generateBoard() {
    let board = new Array(8);
    for (let i = 0; i < board.length; i++) {
        board[i] = new Array(8).fill(false);
    }
    return board;
}
let board = generateBoard();

function knightMoves(start, target) {
    const possibleMoves = [
        // prawo góra
        [1, 2], 
        [2, 1],
        // prawo dół
        [1, -2],
        [2, -1],
        // lewo góra
        [-1, 2],
        [-2, 1],
        // lewo dół
        [-1, -2],
        [-2, -1]
    ];

    let xPosition = start[0];
    let yPosition = start[1];

    let queue = [];
    queue.push([xPosition, yPosition, [[xPosition, yPosition]]]);
    
    board[xPosition][yPosition] = true;

    while(queue.length > 0){
        let [currentX, currentY, path] = queue.shift();
        
        if (currentX === target[0] && currentY === target[1]) {
            console.log(
                `✅ You made it to the destination in **${
                    path.length - 1
                } moves**!`
            );
            console.log("📍 Your path:");
            path.forEach((move, index) => {
                if (index === 0) {
                    console.log(
                        `  ${index + 1}. [${move}] (Starting Position)`
                    );
                } else {
                    console.log(`  ${index + 1}. [${move}]`);
                }
            });
            return;
        }

        for(let [directionX, directionY] of possibleMoves){
            let newX = currentX + directionX;
            let newY = currentY + directionY;

            if((newX >= 0 && newX < 8) && (newY >= 0 && newY < 8) && !board[newX][newY]){
                board[newX][newY] = true;
                queue.push([newX, newY, [...path, [newX, newY]]]);
            }
        }
    }
}

knightMoves([0, 0], [3, 3]);