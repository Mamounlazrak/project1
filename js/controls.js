class Controls {
    constructor(game) {
        this.game = game;      
        this.cooldown = false;
        this.goodTiming = [500, 516, 584, 600]; 
        this.veryGoodTiming = [517 ,532, 568, 583];
        this.perfectTiming = [533, 567]; 

    }

    addControls() {

        window.addEventListener('keydown', (e) => {
            switch(e.code) {
                case 'KeyQ':
                    this.game.keys.forEach((key) => {
                        if(!this.cooldown && key.x === 0 && this.getTiming(key) === 'good') {
                            this.game.score += 1;
                            this.startCooldown();
                        } else if(!this.cooldown && key.x === 0 && this.getTiming(key) === 'veryGood') {
                            this.game.score += 2;
                            this.startCooldown();
                        } else if(!this.cooldown && key.x === 0 && this.getTiming(key) === 'perfect') {
                            this.game.score += 3;
                            this.startCooldown();
                        }
                    });
                    break;
                case 'KeyW':
                    this.game.keys.forEach((key) => {
                        if(!this.cooldown && key.x === 102 && this.getTiming(key) === 'good') {
                            this.game.score += 1;
                            this.startCooldown();
                        } else if(!this.cooldown && key.x === 102 && this.getTiming(key) === 'veryGood') {
                            this.game.score += 2;
                            this.startCooldown();
                        } else if(!this.cooldown && key.x === 102 && this.getTiming(key) === 'perfect') {
                            this.game.score += 3;
                            this.startCooldown();
                        }
                    })
                    break;
                case 'KeyE':
                    this.game.keys.forEach((key) => {
                        if(!this.cooldown && key.x === 204 && this.getTiming(key) === 'good') {
                            this.game.score += 1;
                            this.startCooldown();
                        } else if(!this.cooldown && key.x === 204 && this.getTiming(key) === 'veryGood') {
                            this.game.score += 2;
                            this.startCooldown();
                        } else if(!this.cooldown && key.x === 204 && this.getTiming(key) === 'perfect') {
                            this.game.score += 3;
                            this.startCooldown();
                        }
                    })
                    break;
                case 'KeyR':
                    this.game.keys.forEach((key) => {
                        if(!this.cooldown && key.x === 306 && this.getTiming(key) === 'good') {
                            this.game.score += 1;
                            this.startCooldown();
                        } else if(!this.cooldown && key.x === 306 && this.getTiming(key) === 'veryGood') {
                            this.game.score += 2;
                            this.startCooldown();
                        } else if(!this.cooldown && key.x === 306 && this.getTiming(key) === 'perfect') {
                            this.game.score += 3;
                            this.startCooldown();
                        }
                    })
                    break;
                case 'KeyT':
                    this.game.keys.forEach((key) => {
                        if(!this.cooldown && key.x === 408 && this.getTiming(key) === 'good') {
                            this.game.score += 1;
                            this.startCooldown();
                        } else if(!this.cooldown && key.x === 408 && this.getTiming(key) === 'veryGood') {
                            this.game.score += 2;
                            this.startCooldown();
                        } else if(!this.cooldown && key.x === 408 && this.getTiming(key) === 'perfect') {
                            this.game.score += 3;
                            this.startCooldown();
                        }
                    })
                    break;
            }
        })
    }

    startCooldown() {
        this.cooldown = true;
        setTimeout(() => {
            this.cooldown = false;
        }, 2000);
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
}