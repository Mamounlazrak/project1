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
        this.sound = null;
        this.possibleX = [0, 102, 204, 306, 408]; 
    }

    start() {
        const controls = new Controls(this);
        this.strings = new Key(this, this.possibleX);
        controls.addControls(); 
        this.sound = new Sound("/docs/assets/sound/PIANO + BACKING TRACK FULL.wav")
        this.sound.play();
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
        this.drawCombo();
        this.drawTiming();
        this.checkIfMissed();
        this.checkEndOfGame(); 
        this.frames++; 
    }
    
    createKeys() {
        if(this.frames < 1845 || (this.frames > 3660 && this.frames < 4000)) {
            if (this.frames % 100 === 0) {
                this.keys.push(new Key(this, this.possibleX));
            }
        } else if(this.frames > 1850 && this.frames < 3660) {
            if (this.frames % 100 === 0) {
                this.keys.push(new Key(this, this.possibleX.slice(0,2)));
                this.keys.push(new Key(this, this.possibleX.slice(2)));
            }
        } else if(this.frames > 4300)
        {
            this.sound.stop();
            this.stop();
            this.ctx.fillText(`Score:`);
        }
    }
    
    updateKeysPosition() {
        this.keys.forEach((key) => {
            key.y += 3;
            key.drawKeys();
        })
    }
    
    drawScore() {
        this.ctx.font = '32px serif';
        this.ctx.fillStyle = 'black'; 
        this.ctx.fillText(`Score: ${this.score}`, 30, 100);
    }
                    
                drawCombo() {
                    if (this.combo.goodTiming > 2) {
                        
                        this.ctx.shadowColor = '#FF008E';
                        this.ctx.shadowBlur = 20; 
                        this.ctx.strokeStyle = '#FF008E';
                        this.ctx.strokeRect(0, 0, 510, this.canvas.height);
                        this.comboImg.src = '/docs/assets/images/FireIcon.png';
                        this.ctx.drawImage(this.comboImg, 400, 30, 40, 80);
                        this.ctx.shadowBlur = 0;
                        this.ctx.fillText(`Combo: ${this.combo.goodTiming}`, 200, 100);
                    }
                }
                
                checkEndOfGame() {
                    if(this.frames === 9000) {
                        this.stop();
                    }
                }

            
                
                checkIfMissed(){
                    this.keys.forEach((key) => {
                        if(key.y > 600 && key.timing === '') {
                            key.timing = 'missed';
                            key.color = 'red';
                            this.combo.goodTiming = 0;
                        }
                    })
                }
                
                drawTiming(){
                    this.keys.forEach((key) => {
                        if(key.timingPrint === true) {
                            this.ctx.font = '28px serif';

                            this.ctx.fillText(`${key.timing}`, key.x + 4, key.y - 12);
                        }
                    })
                }
                
                stop() {
                    clearInterval(this.intervalId);
                    console.log('hey')
                }
            }
            
            
