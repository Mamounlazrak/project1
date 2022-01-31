class Controls {
    constructor(game) {
        this.game = game;      
    }

    addControls() {

        window.addEventListener('keydown', (e) => {
            switch(e.code) {
                case 'KeyQ':
                    this.game.keys.forEach((key) => {
                        if(key.x === 0 && key.y >= 500 && key.y <= 600) {
                        this.game.score++;
                        }
                    });
                case 'KeyW':
                    this.game.keys.forEach((key) => {
                        if(key.x === 102 && key.y >= 500 && key.y <= 600) {
                            this.game.score++;
                        }
                    })
                case 'KeyE':
                    this.game.keys.forEach((key) => {
                        if(key.x === 204 && key.y >= 500 && key.y <= 600) {
                            this.game.score++;
                        }
                    })
                case 'KeyR':
                    this.game.keys.forEach((key) => {
                        if(key.x === 306 && key.y >= 500 && key.y <= 600) {
                            this.game.score++;
                        }
                    })
                case 'KeyT':
                    this.game.keys.forEach((key) => {
                        if(key.x === 408 && key.y >= 500 && key.y <= 600) {
                            this.game.score++;
                        }
                    })
            }
        })
    }
}