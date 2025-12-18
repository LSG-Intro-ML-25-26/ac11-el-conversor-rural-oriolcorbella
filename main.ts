controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    nena,
    assets.animation`nena-animation-up`,
    500,
    false
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    nena,
    assets.animation`myAnim`,
    200,
    false
    )
    for (let arbre of sprites.allOfKind(SpriteKind.Enemy)) {
        if (nena.overlapsWith(arbre)) {
            sprites.destroy(arbre, effects.spray, 500)
            info.setScore(info.score() + 3)
            arbres_talats = arbres_talats + 1
        } else {
            animation.runImageAnimation(
            nena,
            assets.animation`myAnim`,
            200,
            false
            )
        }
    }
    if (menu_obert == 1) {
        sprites.destroy(myMenu)
        joc()
        nena.setPosition(pos_x - 30, pos_y - 30)
    }
    if (inventari_obert == 1) {
        sprites.destroy(inventari)
        joc()
        nena.setPosition(pos_x, pos_y)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    nena,
    assets.animation`nena-animation-left`,
    500,
    false
    )
})
function joc () {
    menu_obert = 0
    tiles.setCurrentTilemap(tilemap`level1`)
    venedora = sprites.create(img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `, SpriteKind.Player)
    venedora.sayText("Apropa't per comprar")
    venedora.setPosition(71, 57)
    nena = sprites.create(assets.image`nena-front`, SpriteKind.Player)
    controller.moveSprite(nena)
    scene.cameraFollowSprite(nena)
    info.setScore(0)
    for (let index = 0; index < 30; index++) {
        arbre2 = sprites.create(img`
            ................86..................
            ...........6688867886...............
            ...........8666877688868............
            ............868777767768............
            .........688667777776688............
            ........67767777777778666...........
            .........6776667767666868...........
            ..........866667667677688...........
            .........8666666666667778...........
            ........667766666666666676..........
            .......67766667666776667776.........
            ......886667776676777666688.........
            .....67766777667767777666768........
            ....6776666666777667776666776.......
            .....8667776667766676677776776......
            ......8777666666667776777776688.....
            ....6887766776677677777777776776....
            ..8866666677767777777777766666778...
            .86666666777667767777766666776668...
            ..88677666666777677677666667776668..
            ..86776677666666666666667776666668..
            886666677766667666666776677766668...
            6668666676667766767767766677666668..
            88866666666777677677667666666776668.
            .86668866666766776776666667766666668
            .86688666666666776666667667776666688
            .668866666666666666666677666666688..
            ..8866686666666666677667776666668...
            ...866886666666666677667776666668...
            ...86886668666666667666666666888....
            ....88866886686666666666666668......
            ......86886668666866668666868.......
            ......88866688668866688866888.......
            ........8888888688888ce868..........
            ..............e88e88.ec.8...........
            ...............eeee..e..............
            ...............ceef.ce..............
            ...............ceefcec..............
            ...............feefce...............
            ...............fceeec...............
            ...............ffceec...............
            `, SpriteKind.Enemy)
        arbre2.setPosition(randint(0, 300), randint(0, 300))
    }
    nena.setPosition(pos_x, pos_y)
    if (arbres_talats == 30) {
        for (let index = 0; index < 30; index++) {
            arbre2 = sprites.create(img`
                ................86..................
                ...........6688867886...............
                ...........8666877688868............
                ............868777767768............
                .........688667777776688............
                ........67767777777778666...........
                .........6776667767666868...........
                ..........866667667677688...........
                .........8666666666667778...........
                ........667766666666666676..........
                .......67766667666776667776.........
                ......886667776676777666688.........
                .....67766777667767777666768........
                ....6776666666777667776666776.......
                .....8667776667766676677776776......
                ......8777666666667776777776688.....
                ....6887766776677677777777776776....
                ..8866666677767777777777766666778...
                .86666666777667767777766666776668...
                ..88677666666777677677666667776668..
                ..86776677666666666666667776666668..
                886666677766667666666776677766668...
                6668666676667766767767766677666668..
                88866666666777677677667666666776668.
                .86668866666766776776666667766666668
                .86688666666666776666667667776666688
                .668866666666666666666677666666688..
                ..8866686666666666677667776666668...
                ...866886666666666677667776666668...
                ...86886668666666667666666666888....
                ....88866886686666666666666668......
                ......86886668666866668666868.......
                ......88866688668866688866888.......
                ........8888888688888ce868..........
                ..............e88e88.ec.8...........
                ...............eeee..e..............
                ...............ceef.ce..............
                ...............ceefcec..............
                ...............feefce...............
                ...............fceeec...............
                ...............ffceec...............
                `, SpriteKind.Enemy)
            arbre2.setPosition(randint(0, 300), randint(0, 300))
        }
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    nena,
    assets.animation`nena-animation-right`,
    500,
    false
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    nena,
    assets.animation`nena-animation-down`,
    500,
    false
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    if (menu_obert == 0) {
        scene.centerCameraAt(80, 60)
        tiles.setCurrentTilemap(tilemap`level2`)
        menu_obert = 1
        pos_x = nena.x
        pos_y = nena.y
        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        myMenu = miniMenu.createMenu(
        miniMenu.createMenuItem("1 Gallina = 6 troncs"),
        miniMenu.createMenuItem("1 Patata = 2 troncs"),
        miniMenu.createMenuItem("1 Xai = 5 troncs"),
        miniMenu.createMenuItem("12 Ous = 3 troncs"),
        miniMenu.createMenuItem("1 Caball = 12 troncs")
        )
        myMenu.setTitle("Canvi (Enter per comprar)")
        game.splash("\"A\" per sortir")
        game.splash("\"B\" per comprar")
        myMenu.onButtonPressed(controller.B, function (selection, undefined) {
            if (info.score() >= 6) {
                if (selection == "1 Gallina = 6 troncs") {
                    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
                    game.showLongText("+ 1 Gallina", DialogLayout.Bottom)
                    gallina = gallina + 1
                    info.setScore(info.score() - 6)
                }
            }
            if (info.score() >= 2) {
                if (selection == "1 Patata = 2 troncs") {
                    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
                    game.showLongText("+ 1 Patata (1.5kg)", DialogLayout.Bottom)
                    patata = patata + 1
                    info.setScore(info.score() - 2)
                }
            }
            if (info.score() >= 5) {
                if (selection == "1 Xai = 5 troncs") {
                    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
                    game.showLongText("+ 1 Xai", DialogLayout.Bottom)
                    xai = xai + 1
                    info.setScore(info.score() - 5)
                }
            }
            if (info.score() >= 3) {
                if (selection == "12 Ous = 3 troncs") {
                    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
                    game.showLongText("+12 Ous", DialogLayout.Bottom)
                    ous = ous + 12
                    info.setScore(info.score() - 5)
                }
            }
            if (info.score() >= 12) {
                if (selection == "1 Caball = 12 troncs") {
                    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
                    game.showLongText("+1 Caball", DialogLayout.Bottom)
                    caball = caball + 1
                    info.setScore(info.score() - 12)
                }
            }
        })
    } else {
        sprites.destroy(myMenu)
        joc()
        menu_obert = 0
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inventari_obert == 0) {
        scene.centerCameraAt(80, 60)
        tiles.setCurrentTilemap(tilemap`level0`)
        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        inventari_obert = 1
        pos_x = nena.x
        pos_y = nena.y
        inventari = miniMenu.createMenu(
        miniMenu.createMenuItem("" + gallina + "|" + " Gallina/es"),
        miniMenu.createMenuItem("" + patata + "|" + "Patata/es"),
        miniMenu.createMenuItem("" + xai + "|" + "Xai/s"),
        miniMenu.createMenuItem("" + ous + "|" + "Ou/s"),
        miniMenu.createMenuItem("" + caball + "|" + "Caball/s")
        )
    } else {
        sprites.destroy(inventari)
        joc()
        inventari_obert = 0
    }
})
let caball = 0
let ous = 0
let xai = 0
let patata = 0
let gallina = 0
let arbre2: Sprite = null
let venedora: Sprite = null
let inventari: miniMenu.MenuSprite = null
let inventari_obert = 0
let pos_y = 0
let pos_x = 0
let myMenu: miniMenu.MenuSprite = null
let menu_obert = 0
let arbres_talats = 0
let nena: Sprite = null
joc()
