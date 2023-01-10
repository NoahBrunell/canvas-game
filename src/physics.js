export function physics(player, keys) {
    if (player.y < 10) {
        keys.w = false
    }
    if (player.x < 10) {
        keys.a = false
    }
    if (player.y > (canvas.height - player.h - 10)) {
        keys.s = false
    }
    if (player.x > (canvas.width - player.w - 10)) {
        keys.d = false
    }
}