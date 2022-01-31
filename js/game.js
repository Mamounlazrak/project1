class Game {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d'); 
        this.intervalId = null;
        this.keys = [];
        this.frames = 0; 
        this.intervalId = null;
        this.fps = 1000 / 60; 
        this.score = 0; 
    }

    start() {
        const controls = new Controls(this);
        controls.addControls(); 
        this.intervalId = setInterval(() => {
            this.update();
        }, this.fps);
    }

    update() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.createKeys();
        this.updateKeysPosition();
        this.drawScore();
        this.frames++; 
    }

    createKeys() {
        if (this.frames % 300 === 0) {
            this.keys.push(new Key(this));
        }
    }

    updateKeysPosition() {
        this.keys.forEach((key) => {
            key.y++;
            key.draw();
        })
    }

    drawScore() {
        this.ctx.font = '32px serif';
        this.ctx.fillStyle = 'black'; 
        this.ctx.fillText(`Score: ${this.score}`, 30, 100);
    }
}

