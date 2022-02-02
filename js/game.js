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
        this.combo = {
            goodTiming: 0, 
            veryGoodTiming: 0, 
            perfectTiming: 0
        }
        this.comboImg = new Image();
    }

    start() {
        const controls = new Controls(this);
        this.strings = new Key(this);
        controls.addControls(); 
        this.intervalId = setInterval(() => {
            this.update();
        }, this.fps);
    }

    stop() {
        clearInterval(this.intervalId);
    }

    update() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.strings.drawStrings();
        this.createKeys();
        this.updateKeysPosition();
        this.drawScore();
        this.drawTiming();
        this.keys.forEach((key) => {
            if(key.y > 600 && key.timing === '') {
                key.timing = 'missed';
                key.color = 'red';
                this.combo.goodTiming = 0;
            }
        })
        this.drawCombo();
        this.checkEndOfGame(); 
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
            this.ctx.font = '32px serif';
            this.ctx.fillStyle = 'black'; 
            if(this.timing.word != '') {
                this.ctx.fillText(`${this.timing.word}`, this.timing.x + 20, this.timing.y + 4);
                setTimeout(() => {
                    this.timing.word = '';
                    this.timing.x = null;
                    this.timing.y = null; 
                }, 1000);

            }
    }

     drawCombo() {
        if (this.combo.goodTiming > 2) {

            this.ctx.shadowColor = '#FF008E';
            this.ctx.shadowBlur = 20; 
            this.ctx.strokeStyle = '#FF008E';
            this.ctx.strokeRect(0, 0, this.canvas.width, this.canvas.height);
            this.comboImg.src = '/images/FireIcon.png';
            this.ctx.drawImage(this.comboImg, 400, 350, 40, 80);
            this.ctx.shadowBlur = 0;
            this.ctx.fillText(`Combo: ${this.combo.goodTiming}`, 200, 100);
        }
    }

    checkEndOfGame() {
        if(this.frames === 9000) {
            this.stop();
        }
    }
    
}

