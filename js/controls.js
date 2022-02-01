class Controls {
    constructor(game) {
        this.game = game;      
        this.cooldownScore = false;
        this.cooldownTiming = false; 
        this.goodTiming = [500, 516, 584, 600]; 
        this.veryGoodTiming = [517 ,532, 568, 583];
        this.perfectTiming = [533, 567]; 

    }

    addControls() {

        window.addEventListener('keydown', (e) => {
            switch(e.code) {
                case 'KeyQ':
                    this.game.keys.forEach((key) => {
                        let timing = this.getTiming(key);
                        if(!this.cooldownScore && key.x === 0 && timing === 'good') {
                            this.game.score += 1;
                            this.startCooldownScore();
                            // this.drawTiming(timing, key.x, key.y); //to be polished and implemented for other timings

                            this.passTimingInfo('good', key.x, key.y);
                            // this.game.timing.word = 'good'; 
                            // this.game.timing.x = key.x; 
                            // this.game.timing.y = key.y;

                        } else if(!this.cooldownScore && key.x === 0 && timing === 'veryGood') {
                            this.game.score += 2;
                            this.startCooldownScore();
                        } else if(!this.cooldownScore && key.x === 0 && timing === 'perfect') {
                            this.game.score += 3;
                            this.startCooldownScore();
                        }
                    });
                    break;
                case 'KeyW':
                    this.game.keys.forEach((key) => {
                        let timing = this.getTiming(key);
                        if(!this.cooldownScore && key.x === 102 && timing === 'good') {
                            this.game.score += 1;
                            this.startCooldownScore();
                        } else if(!this.cooldownScore && key.x === 102 && timing === 'veryGood') {
                            this.game.score += 2;
                            this.startCooldownScore();
                        } else if(!this.cooldownScore && key.x === 102 && timing === 'perfect') {
                            this.game.score += 3;
                            this.startCooldownScore();
                        }
                    })
                    break;
                case 'KeyE':
                    this.game.keys.forEach((key) => {
                        let timing = this.getTiming(key);
                        if(!this.cooldownScore && key.x === 204 && timing === 'good') {
                            this.game.score += 1;
                            this.startCooldownScore();
                        } else if(!this.cooldownScore && key.x === 204 && timing === 'veryGood') {
                            this.game.score += 2;
                            this.startCooldownScore();
                        } else if(!this.cooldownScore && key.x === 204 && timing === 'perfect') {
                            this.game.score += 3;
                            this.startCooldownScore();
                        }
                    })
                    break;
                case 'KeyR':
                    this.game.keys.forEach((key) => {
                        let timing = this.getTiming(key);
                        if(!this.cooldownScore && key.x === 306 && timing === 'good') {
                            this.game.score += 1;
                            this.startCooldownScore();
                        } else if(!this.cooldownScore && key.x === 306 && timing === 'veryGood') {
                            this.game.score += 2;
                            this.startCooldownScore();
                        } else if(!this.cooldownScore && key.x === 306 && timing === 'perfect') {
                            this.game.score += 3;
                            this.startCooldownScore();
                        }
                    })
                    break;
                case 'KeyT':
                    this.game.keys.forEach((key) => {
                        let      timing = this.getTiming(key);
                        if(!this.cooldownScore && key.x === 408 && timing === 'good') {
                            this.game.score += 1;
                            this.startCooldownScore();
                        } else if(!this.cooldownScore && key.x === 408 && timing === 'veryGood') {
                            this.game.score += 2;
                            this.startCooldownScore();
                        } else if(!this.cooldownScore && key.x === 408 && timing === 'perfect') {
                            this.game.score += 3;
                            this.startCooldownScore();
                        }
                    })
                    break;
            }
        })
    }

    startCooldownScore() {
        this.cooldownScore = true;
        setTimeout(() => {
            this.cooldownScore = false;
        }, 2000);
    }

    startCooldownTiming() {
        let intervalId = setInterval(() => {
            this.game.ctx.font = '12px serif';
            this.game.ctx.fillStyle = 'black'; 
            this.game.ctx.fillText(`${timing}`, x + 20, y + 4);
        }, this.game.fps);
        setTimeout(() => {
            clearInterval(intervalId);
        }, 1000);
    }

    getTiming(key) {
        if( (key.y >= this.goodTiming[0] && key.y <= this.goodTiming[1]) || (key.y >= this.goodTiming[2] && key.y <= this.goodTiming[3]) ) {
            return 'good'; 
        } else if( (key.y >= this.veryGoodTiming[0] && key.y <= this.veryGoodTiming[1]) || (key.y >= this.veryGoodTiming[2] && key.y <= this.veryGoodTiming[3]) ) {
            return 'veryGood';
        } else if(key.y >= this.perfectTiming[0] && key.y <= this.perfectTiming[1]) {
            return 'perfect'
        }
    }

    passTimingInfo(timing, x, y) {

        this.game.timing.word = timing; 
        this.game.timing.x = x; 
        this.game.timing.y = y;

    }

    // drawTiming(timing, x, y) {
    //     let intervalId = setInterval(() => {
    //         this.game.ctx.font = '16px serif';
    //         this.game.ctx.fillStyle = 'black'; 
    //         this.game.ctx.fillText(`${timing}`, x + 20, y + 4);
    //     }, 1);
    //     setTimeout(() => {
    //         this.timing.word = '';
    //         this.timing.x = null;
    //         this.timing.y = null; 
    //     }, 1000);
    // }

}