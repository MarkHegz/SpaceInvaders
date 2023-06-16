// Howler.volume(0.5)

const audio = {
    backgroundMusic: new Howl({
        src: './audio/backgroundMusic.wav',
        volume: 1,
        loop: true
    }),
    bomb: new Howl({
        src: './audio/bomb.mp3'
    }),
    bonus: new Howl({
        src: './audio/bonus.mp3',
        volume: 0.2,
    }),
    enemyShoot: new Howl({
        src: './audio/enemyShoot.wav',
        volume: 0.4,
    }),
    explode: new Howl({
        src: './audio/explode.wav',
        volume: 0.3,
    }),
    gameOver: new Howl({
        src: './audio/gameOver.mp3',
        volume: 0.6,
    }),
    select: new Howl({
        src: './audio/select.mp3',
        volume: 0.8
    }),
    shoot: new Howl({
        src: './audio/shoot.wav',
        volume: 0.2,
    }),
    start: new Howl({
        src: './audio/start.mp3',
        volume: 0.4,
    }),
    
}