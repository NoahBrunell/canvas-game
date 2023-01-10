import './src/movement.js'
import { movement } from './src/movement.js'

import './src/physics.js'
import { physics } from './src/physics.js'

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.width = 800
canvas.height = 600
canvas.style.border = '1px solid white'

let speed = 10

let player = {
    x: 375,
    y: 275,
    w: 50,
    h: 50,
    color: '#1f54bf'
}

let keys = {
    w: false,
    a: false,
    s: false, 
    d: false
}

function renderPlayer(x, y, w, h, color){
    // Draws a square and changes it's color
    ctx.clearRect(0,0, canvas.width, canvas.height)
    ctx.fillRect(x, y, w, h)
    ctx.fillStyle = color
}

function gameLoop(){
    // game functions runs 60times/s
    renderPlayer(player.x, player.y, player.w, player.h, player.color)
    physics(player, keys)
    movement(player, keys, speed)
    
}

// Runs gameLoop() 60 times per second
setInterval(gameLoop, 1000 / 60)

