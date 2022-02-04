class Controls {
    constructor(game) {
        this.game = game;      
        this.cooldownTiming = false; 
        this.timing = {
            good: [400, 440, 560, 600],
            veryGood: [440 ,480, 520, 560],
            perfect: [486, 514]
        }
        this.soundObject = null;
    }

    addControls() {
        window.addEventListener('keydown', (e) => {
            switch(e.code) {
                case 'KeyQ':
                    this.game.keys.forEach((key, index) => {
                        let timing = this.getTiming(key);
                        if(!key.pressed && key.x === 0 && timing === 'good') {
                            key.timing = 'OK';
                            key.pressed = true;
                            this.game.score += 1;
                            this.printCommand(key);
                            this.updateCombo(index, 'good');
                            this.passTimingInfo('good', key.x, key.y);
                            this.addAnimation(key);
                        } else if(!key.pressed && key.x === 0 && timing === 'veryGood') {
                            key.timing = 'good';
                            this.printCommand(key);
                            this.updateCombo(index, 'good');
                            this.game.score += 2;
                            key.pressed = true;
                            this.passTimingInfo('very good', key.x, key.y);
                            this.addAnimation(key);
                        } else if(!key.pressed && key.x === 0 && timing === 'perfect') {
                            key.timing = 'perfect!';
                            this.printCommand(key);
                            this.updateCombo(index, 'good');
                            this.game.score += 3;
                            key.pressed = true;
                            this.passTimingInfo('perfect!', key.x, key.y);
                            this.addAnimation(key);
                        }
                    });
                    break;
                case 'KeyW':
                    this.game.keys.forEach((key, index) => {
                        let timing = this.getTiming(key);
                        if(!key.pressed && key.x === 102 && timing === 'good') {
                            key.timing = 'OK';
                            key.pressed = true;
                            this.game.score += 1;
                            this.printCommand(key);
                            this.updateCombo(index, 'good');
                            this.passTimingInfo('good', key.x, key.y);
                            this.addAnimation(key);
                        } else if(!key.pressed && key.x === 102 && timing === 'veryGood') {
                            key.timing = 'good';
                            this.printCommand(key);
                            this.updateCombo(index, 'good');
                            this.game.score += 2;
                            key.pressed = true;
                            this.passTimingInfo('very good', key.x, key.y);
                            this.addAnimation(key);
                        } else if(!key.pressed && key.x === 102 && timing === 'perfect') {
                            key.timing = 'perfect!';
                            this.printCommand(key);
                            this.updateCombo(index, 'good');
                            this.game.score += 3;
                            key.pressed = true;
                            this.passTimingInfo('perfect!', key.x, key.y);
                            this.addAnimation(key);
                        }
                    })
                    break;
                case 'KeyE':
                    this.game.keys.forEach((key, index) => {
                        let timing = this.getTiming(key);
                        if(!key.pressed && key.x === 204 && timing === 'good') {
                            key.timing = 'OK';
                            key.pressed = true;
                            this.game.score += 1;
                            this.printCommand(key);
                            this.updateCombo(index, 'good');
                            this.passTimingInfo('good', key.x, key.y);
                            this.addAnimation(key);
                        } else if(!key.pressed && key.x === 204 && timing === 'veryGood') {
                            key.timing = 'good';
                            this.printCommand(key);
                            this.updateCombo(index, 'good');
                            this.game.score += 2;
                            key.pressed = true;
                            this.passTimingInfo('very good', key.x, key.y);
                            this.addAnimation(key);
                        } else if(!key.pressed && key.x === 204 && timing === 'perfect') {
                            key.timing = 'perfect!';
                            this.printCommand(key);
                            this.updateCombo(index, 'good');
                            this.game.score += 3;
                            key.pressed = true;
                            this.passTimingInfo('perfect!', key.x, key.y);
                            this.addAnimation(key);
                        }
                    })
                    break;
                case 'KeyR':
                    this.game.keys.forEach((key, index) => {
                        let timing = this.getTiming(key);
                        if(!key.pressed && key.x === 306 && timing === 'good') {
                            key.timing = 'OK';
                            key.pressed = true;
                            this.game.score += 1;
                            this.printCommand(key);
                            this.updateCombo(index, 'good');
                            this.passTimingInfo('good', key.x, key.y);
                            this.addAnimation(key);
                        } else if(!key.pressed && key.x === 306 && timing === 'veryGood') {
                            key.timing = 'good';
                            this.printCommand(key);
                            this.updateCombo(index, 'good');
                            this.game.score += 2;
                            key.pressed = true;
                            this.passTimingInfo('very good', key.x, key.y);
                            this.addAnimation(key);
                        } else if(!key.pressed && key.x === 306 && timing === 'perfect') {
                            key.timing = 'perfect!';
                            this.printCommand(key);
                            this.updateCombo(index, 'good');
                            this.game.score += 3;
                            key.pressed = true;
                            this.passTimingInfo('perfect!', key.x, key.y);
                            this.addAnimation(key);
                        }
                    })
                    break;
                case 'KeyT':
                    this.game.keys.forEach((key, index) => {
                        let timing = this.getTiming(key);
                        if(!key.pressed && key.x === 408 && timing === 'good') {
                            key.timing = 'OK';
                            key.pressed = true;
                            this.game.score += 1;
                            this.printCommand(key);
                            this.updateCombo(index, 'good');
                            this.passTimingInfo('good', key.x, key.y);
                            this.addAnimation(key);
                        } else if(!key.pressed && key.x === 408 && timing === 'veryGood') {
                            key.timing = 'good';
                            this.printCommand(key);
                            this.updateCombo(index, 'good');
                            this.game.score += 2;
                            key.pressed = true;
                            this.passTimingInfo('very good!', key.x, key.y);
                            this.addAnimation(key);
                        } else if(!key.pressed && key.x === 408 && timing === 'perfect') {
                            key.timing = 'perfect!';
                            this.printCommand(key);
                            this.updateCombo(index, 'good');
                            this.game.score += 3;
                            key.pressed = true;
                            this.passTimingInfo('perfect!', key.x, key.y);
                            this.addAnimation(key);
                        }
                    })
                    break;
            }
        })
    }

    getTiming(key) {
        if( (key.y >= this.timing.good[0] && key.y <= this.timing.good[1]) || (key.y >= this.timing.good[2] && key.y <= this.timing.good[3]) ) {
            return 'good'; 
        } else if( (key.y >= this.timing.veryGood[0] && key.y <= this.timing.veryGood[1]) || (key.y >= this.timing.veryGood[2] && key.y <= this.timing.veryGood[3]) ) {
            return 'veryGood';
        } else if(key.y >= this.timing.perfect[0] && key.y <= this.timing.perfect[1]) {
            return 'perfect'; 
        }
    }

    passTimingInfo(timing, x, y) {
        this.game.timing.word = timing; 
        this.game.timing.x = x; 
        this.game.timing.y = y;
    }

    sound(src) {
        this.soundObject = document.createElement("audio");
        this.soundObject.src = src; 
        this.soundObject.setAttribute("preload", "auto");
        this.soundObject.setAttribute("controls", "none");
        this.soundObject.style.display = "none";
        document.body.appendChild(this.soundObject);
        this.play = function(){
            this.soundObject.play();
        }
        this.stop = function(){
            this.soundObject.pause();
        }
    }

    addAnimation (key){
        key.animation = true;
        setTimeout(() => {
            key.animation = false;
        }, 200);
    }

    updateCombo(index, timing) {
         if(index != 0 && this.game.keys[index - 1].timing === timing) {
             switch (timing) {
                 case 'good':
                     this.game.combo.goodTiming++;
                     break;
                case 'veryGood':
                     this.game.combo.goodTiming++;
                     break;
                case 'perfect':
                     this.game.combo.goodTiming++;
                     break;
             }
        } else {this.game.combo.goodTiming ++;}
    }

    printCommand(key) {
        key.timingPrint = true;
        setTimeout(() => {
            key.timingPrint = false;
        }, 500);
    }
    
}
