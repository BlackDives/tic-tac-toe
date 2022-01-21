function main() {
  const player = (letter) => {
    let flag = false;
    let theLetter = letter;
    const placeLetter = () => {
      return theLetter;
    };
    const playerTurn = () => {
      let letter = placeLetter;
      flag = !flag;
      console.log(flag);
      return theLetter;
    };

    return { placeLetter, playerTurn, flag };
  };

  const gameBoard = (() => {
    const gameBoardArr = [];
    return { gameBoardArr };
  })();

  let playerX = player("X");
  playerX.flag = true;
  let PLayerO = player("O");

  const displayController = (() => {
    let board = document.querySelectorAll(".ttt-item");

    const placeOnBoard = (obj) => {
      board.forEach((index) => {
        index.addEventListener("click", (e) => {
          gameBoard.gameBoardArr[parseInt(index.getAttribute("data-num") - 1)] =
            obj.playerTurn();
          console.log(gameBoard.gameBoardArr);

          index.textContent =
            gameBoard.gameBoardArr[
              parseInt(index.getAttribute("data-num") - 1)
            ];
          console.log(index.getAttribute("data-num"));
        });
      });
    };

    return { board, placeOnBoard };
  })();

  const playerGo = (x, y) => {
    if (x.flag == true) displayController.placeOnBoard(x);
    else if (y.flag == true) displayController.placeOnBoard(y);
    else return;
  };

  playerGo(playerX, PLayerO);
}
