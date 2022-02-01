class Controls {
    constructor(game) {
        this.game = game;      
        this.cooldownScore = false;
        this.cooldownTiming = false; 
        this.goodTiming = [500, 516, 584, 600]; 
        this.veryGoodTiming = [517 ,532, 568, 583];
        this.perfectTiming = [533, 567]; 
        this.comboGoodTiming = 0;
        this.comboVeryGoodTiming = 0; 
        this.comboPerfectTiming = 0;
        this.soundObject = null;

    }

    addControls() {

        window.addEventListener('keydown', (e) => {
            switch(e.code) {
                case 'KeyQ':
                    this.game.keys.forEach((key, index) => {
                        let timing = this.getTiming(key);
                        if(!this.cooldownScore && key.x === 0 && timing === 'good') {
                            this.updateCombo(index, 'good');
                            console.log(this.comboGoodTiming); 
                            // console.log(key.timing, 'key timing');
                            if (index != 0) {console.log(this.game.keys[index - 1].timing)}
                            this.game.score += 1;
                            this.startCooldownScore();
                            this.passTimingInfo('good', key.x, key.y);
                            this.sound("/sound/key01.mp3");
                            this.soundObject.play();
                            this.addAnimation(key);
                        } else if(!this.cooldownScore && key.x === 0 && timing === 'veryGood') {
                            this.game.score += 2;
                            this.startCooldownScore();
                            this.passTimingInfo('very good', key.x, key.y);
                            this.addAnimation(key);
                        } else if(!this.cooldownScore && key.x === 0 && timing === 'perfect') {
                            this.game.score += 3;
                            this.startCooldownScore();
                            this.passTimingInfo('perfect!', key.x, key.y);
                            this.addAnimation(key);
                        }
                    });
                    break;
                case 'KeyW':
                    this.game.keys.forEach((key) => {
                        let timing = this.getTiming(key);
                        if(!this.cooldownScore && key.x === 102 && timing === 'good') {
                            this.game.score += 1;
                            this.startCooldownScore();
                            this.passTimingInfo('good', key.x, key.y);
                            this.addAnimation(key);


                        } else if(!this.cooldownScore && key.x === 102 && timing === 'veryGood') {
                            this.game.score += 2;
                            this.startCooldownScore();
                            this.passTimingInfo('very good', key.x, key.y);
                            this.addAnimation(key);


                        } else if(!this.cooldownScore && key.x === 102 && timing === 'perfect') {
                            this.game.score += 3;
                            this.startCooldownScore();
                            this.passTimingInfo('perfect!', key.x, key.y);
                            this.addAnimation(key);


                        }
                    })
                    break;
                case 'KeyE':
                    this.game.keys.forEach((key) => {
                        let timing = this.getTiming(key);
                        if(!this.cooldownScore && key.x === 204 && timing === 'good') {
                            this.game.score += 1;
                            this.startCooldownScore();
                            this.passTimingInfo('good', key.x, key.y);
                            this.addAnimation(key);

                        } else if(!this.cooldownScore && key.x === 204 && timing === 'veryGood') {
                            this.game.score += 2;
                            this.startCooldownScore();
                            this.passTimingInfo('very good', key.x, key.y);
                            this.addAnimation(key);


                        } else if(!this.cooldownScore && key.x === 204 && timing === 'perfect') {
                            this.game.score += 3;
                            this.startCooldownScore();
                            this.passTimingInfo('perfect!', key.x, key.y);
                            this.addAnimation(key);

                        }
                    })
                    break;
                case 'KeyR':
                    this.game.keys.forEach((key) => {
                        let timing = this.getTiming(key);
                        if(!this.cooldownScore && key.x === 306 && timing === 'good') {
                            this.game.score += 1;
                            this.startCooldownScore();
                            this.passTimingInfo('good', key.x, key.y);
                            this.addAnimation(key);

                        } else if(!this.cooldownScore && key.x === 306 && timing === 'veryGood') {
                            this.game.score += 2;
                            this.startCooldownScore();
                            this.passTimingInfo('very good', key.x, key.y);
                            this.addAnimation(key);

                        } else if(!this.cooldownScore && key.x === 306 && timing === 'perfect') {
                            this.game.score += 3;
                            this.startCooldownScore();
                            this.passTimingInfo('perfect!', key.x, key.y);
                        }
                    })
                    break;
                case 'KeyT':
                    this.game.keys.forEach((key) => {
                        let timing = this.getTiming(key);
                        if(!this.cooldownScore && key.x === 408 && timing === 'good') {
                            this.game.score += 1;
                            this.startCooldownScore();
                            this.passTimingInfo('good', key.x, key.y);
                            this.addAnimation(key);

                        } else if(!this.cooldownScore && key.x === 408 && timing === 'veryGood') {
                            this.game.score += 2;
                            this.startCooldownScore();
                            this.passTimingInfo('very good!', key.x, key.y);
                            this.addAnimation(key);

                        } else if(!this.cooldownScore && key.x === 408 && timing === 'perfect') {
                            this.game.score += 3;
                            this.startCooldownScore();
                            this.passTimingInfo('perfect!', key.x, key.y);
                            this.addAnimation(key);


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

    // getTiming(key) {
    //     if( (key.y >= this.goodTiming[0] && key.y <= this.goodTiming[1]) || (key.y >= this.goodTiming[2] && key.y <= this.goodTiming[3]) ) {
    //         return 'good'; 
    //     } else if( (key.y >= this.veryGoodTiming[0] && key.y <= this.veryGoodTiming[1]) || (key.y >= this.veryGoodTiming[2] && key.y <= this.veryGoodTiming[3]) ) {
    //         return 'veryGood';
    //     } else if(key.y >= this.perfectTiming[0] && key.y <= this.perfectTiming[1]) {
    //         return 'perfect'
    //     }
    // }


    getTiming(key) {
        if( (key.y >= this.goodTiming[0] && key.y <= this.goodTiming[1]) || (key.y >= this.goodTiming[2] && key.y <= this.goodTiming[3]) ) {
            key.timing = 'good'; 
            return 'good'; 
        } else if( (key.y >= this.veryGoodTiming[0] && key.y <= this.veryGoodTiming[1]) || (key.y >= this.veryGoodTiming[2] && key.y <= this.veryGoodTiming[3]) ) {
            key.timing = 'veryGood';
            return 'veryGood';
        } else if(key.y >= this.perfectTiming[0] && key.y <= this.perfectTiming[1]) {
            key.timing = 'perfect';
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
                     this.comboGoodTiming++;
                     break;
                // case 'veryGood':
                //     this.comboVeryGoodTiming++;
                //     break;
                // case 'perfect':
                //     this.comboPerfectTiming++;
                //     break;
             }
        }
    }
}