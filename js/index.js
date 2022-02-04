const intro = document.getElementsByClassName('game-intro')[0];

window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        intro.style.display = 'none';
        startGame();

    };
};

function startGame() {
    const game = new Game(); 
    game.start();

  }