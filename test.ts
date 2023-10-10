let asset = "red"
let pic = images.getImageFromString(asset)
let me = sprites.create(pic)
let tile = images.getTileFromString(asset)
asset = "level"
let tm = images.getTilemapFromString(asset)
scene.setTileMapLevel(tm)

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    asset = "duck"
    let anim = images.getAnimationFromString(asset)
    animation.runImageAnimation(me, anim, 100, true)
})

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.setTileAt(me.tilemapLocation(), tile)
})
