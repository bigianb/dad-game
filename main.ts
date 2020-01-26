namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
. . . . . . . . . . . . . . . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. 4 . . . . . . . . . . . 4 . . 
. 4 . . . . . . . . . . . 4 . . 
. 4 . . 4 4 4 4 4 4 4 4 . 4 . . 
. 4 . . 4 . . . . . . 4 . 4 . . 
. 4 . . 4 . . . . . . 4 . 4 . . 
. 4 . . 4 . . 4 4 . . 4 . 4 . . 
. 4 . . 4 . . 4 4 . . 4 . 4 . . 
. 4 . . 4 . . 4 4 . . 4 . 4 . . 
. 4 . . 4 . . . . . . 4 . 4 . . 
. 4 . . 4 . . . . . . 4 . 4 . . 
. 4 . . 4 4 4 4 4 4 4 4 . 4 . . 
. 4 . . . . . . . . . . . 4 . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. . . . . . . . . . . . . . . . 
`
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hero.vy == 0) {
        hero.vy = -150
    }
})
let hero: Sprite = null
hero = sprites.create(img`
. . . . . c c c f f f . . . 
. . . f f 5 5 5 5 5 5 f f . 
. . f 5 5 5 5 5 5 5 5 5 f . 
. c 5 5 5 5 5 5 5 5 5 5 5 f 
. c 5 5 5 5 5 5 5 d b 5 5 f 
f 5 5 5 5 5 5 5 b 4 4 d 5 f 
f 5 5 5 5 5 c c 4 4 4 b 5 f 
f b 5 5 5 b c b c 4 4 f f f 
c b b b b b e 1 c d d f f . 
c b b b b f 4 d d d d f . . 
. c b b 4 e e e 4 4 4 f . . 
. . f f 4 d d e 9 9 9 f . . 
. . . f e d d e 9 9 9 f . . 
. . . f b e e b 3 b 3 3 f . 
. . . f f b 3 b 3 b 3 f f . 
. . . . . f f b b f f . . . 
`, SpriteKind.Player)
hero.setPosition(10, 98)
hero.ay = 350
controller.moveSprite(hero, 100, 0)
scene.cameraFollowSprite(hero)
scene.setBackgroundColor(9)
tiles.setTilemap(tiles.createTilemap(
            hex`1e000800000000000000000000000000000000000000000000000000000000000000000000000000040400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004040000050500000000000000000000000004000000000000000000000000000000050500000404000004000400000000000000000000000000000005050000050500000505000000000000000005050004000000000000000005050000050500000505000005050500000005050000000000000000050505050505050505050505050505050505050505050505050505000000`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . 
. . 2 2 . . 2 2 . . 2 2 . . . . . . . . 2 2 . . . . . . . . 
. . 2 2 . . 2 2 . . 2 2 . . 2 2 2 . . . 2 2 . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 . . . 
`,
            [myTiles.tile0,sprites.builtin.forestTiles1,sprites.builtin.forestTiles16,sprites.builtin.forestTiles21,myTiles.tile1,sprites.dungeon.floorLight0,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.collectibleRedCrystal],
            TileScale.Sixteen
        ))
