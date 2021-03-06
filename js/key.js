class Key {
    constructor(game, possibleX) {
        this.game = game;
        this.possibleX = possibleX; 
        this.x = this.possibleX[Math.floor(Math.random() * this.possibleX.length)]; 
        this.y = 0;
        this.width = 100; 
        this.height = 100;
        this.stringHeight = 500; 
        this.stringLineWidth = 1;
        this.possibleColor = ['green', 'purple', 'pink', 'blue', 'orange'];  
        this.color = this.getColor();
        this.animation = false;  
        this.timing = '';
        this.timingPrint = false;
        this.pressed = false; 
    }

    drawKeys() {
        this.game.ctx.fillStyle = this.color;
        if(this.animation) {
            this.width = 110;
            this.height = 110;
            this.game.ctx.shadowBlur = 30;
            this.game.ctx.shadowColor = this.color;
        } else {
            this.width = 100; 
            this.height = 100;
            this.game.ctx.shadowBlur = 0};
        this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    drawString(color, x, y, width, height) {
        this.game.ctx.strokeStyle = color;
        this.game.ctx.lineWidth = this.stringLineWidth; 
        this.game.ctx.strokeRect(x, y, width, height);
    }

    drawStrings() {
        this.drawString(this.possibleColor[0], this.possibleX[0], this.stringHeight, this.width, this.height);
        this.drawString(this.possibleColor[1], this.possibleX[1], this.stringHeight,this.width, this.height);
        this.drawString(this.possibleColor[2], this.possibleX[2], this.stringHeight,this.width, this.height);
        this.drawString(this.possibleColor[3], this.possibleX[3], this.stringHeight,this.width, this.height);
        this.drawString(this.possibleColor[4], this.possibleX[4], this.stringHeight,this.width, this.height);

    }

    getColor() {
        switch(this.x) {
            case 0:
                return 'green'; 
            case 102: 
                return 'purple'; 
            case 204: 
                return 'pink'; 
            case 306: 
                return 'blue'; 
            case 408: 
                return 'orange'; 
        }

    }



}