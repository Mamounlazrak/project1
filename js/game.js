class Game {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d'); 
        this.intervalId = null;
        this.keys = [];
        this.strings = {};
        this.frames = 0; 
        this.intervalId = null;
        this.fps = 1000 / 60; 
        this.score = 0; 
        
        this.timing = {
            word: '', 
            x: null, 
            y: null
        };
    }

    start() {
        const controls = new Controls(this);
        this.strings = new Key(this);
        controls.addControls(); 
        this.intervalId = setInterval(() => {
            this.update();
        }, this.fps);
    }

    update() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.strings.drawStrings();
        this.createKeys();
        this.updateKeysPosition();
        this.drawScore();
        this.drawTiming();
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
            key.drawKeys();
        })
    }

    drawScore() {
        this.ctx.font = '32px serif';
        this.ctx.fillStyle = 'black'; 
        this.ctx.fillText(`Score: ${this.score}`, 30, 100);
    }

    drawTiming() {
            this.ctx.font = '16px serif';
            this.ctx.fillStyle = 'black'; 
            if(this.timing.word != '') {
                this.ctx.fillText(`${this.timing.word}`, this.timing.x + 20, this.timing.y + 4);
                setTimeout(() => {
                    this.timing.word = '';
                    this.timing.x = null;
                    this.timing.y = null; 
                }, 1000);

            }
        //     this.ctx.fillText(`${this.timing.word}`, this.timing.x + 20, this.timing.y + 4);
        // setTimeout(() => {
        //     this.timing.word = '';
        //     this.timing.x = null;
        //     this.timing.y = null; 
        // }, 1000);
    }


}

