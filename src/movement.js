export function movement(player, keys, speed) {
    window.addEventListener('keydown', (e)=>{
        if(e.key == 'w' ?? e.key == 'space') {
            keys.w = true
        }
        if(e.key == 'a') {
            keys.a = true
        }
        if(e.key == 's') {
            keys.s = true
        }
        if(e.key == 'd') {
            keys.d = true
        }
    })

    window.addEventListener('keyup', (e)=>{
        if (e.key == 'w') {
            keys.w = false
        }
        if (e.key == 'a') {
            keys.a = false
        }
        if (e.key == 's') {
            keys.s = false
        }
        if (e.key == 'd') {
            keys.d = false
        }
    })

    if (keys.w == true) {
        player.y -= speed
    }
    if (keys.s == true) {
        player.y += speed
    }
    if (keys.a == true) {
        player.x -= speed
    }
    if (keys.d == true) {
        player.x += speed
    }
}

