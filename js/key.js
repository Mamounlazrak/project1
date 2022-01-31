class Key {
    constructor(game) {
        this.game = game;
        this.possibleX = [0, 102, 204, 306, 408]; 
        this.x = this.possibleX[Math.floor(Math.random() * this.possibleX.length)];  
        this.y = 0;
        this.width = 100; 
        this.height = 100;
        this.possibleColor = ['green', 'red', 'yellow', 'blue', 'orange'];  
        this.color = this.getColor(); 
    }

    draw() {
        this.game.ctx.fillStyle = this.color;
        this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    getColor() {
        switch(this.x) {
            case 0:
                return 'green'; 
            case 102: 
                return 'red'; 
            case 204: 
                return 'yellow'; 
            case 306: 
                return 'blue'; 
            case 408: 
                return 'orange'; 
        }

    }



}