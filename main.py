def on_up_pressed():
    animation.run_image_animation(nena,
        assets.animation("""
            nena-animation-up
            """),
        500,
        False)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_a_pressed():
    global arbres_talats
    animation.run_image_animation(nena, assets.animation("""
        myAnim
        """), 200, False)
    for arbre in sprites.all_of_kind(SpriteKind.enemy):
        if nena.overlaps_with(arbre):
            sprites.destroy(arbre, effects.spray, 500)
            info.set_score(info.score() + 3)
            arbres_talats = arbres_talats + 1
        else:
            animation.run_image_animation(nena, assets.animation("""
                myAnim
                """), 200, False)
    if menu_obert == 1:
        sprites.destroy(myMenu)
        joc()
        nena.set_position(pos_x - 15, pos_y - 15)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_left_pressed():
    animation.run_image_animation(nena,
        assets.animation("""
            nena-animation-left
            """),
        500,
        False)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def joc():
    global menu_obert, venedora, nena, arbre2
    menu_obert = 0
    tiles.set_current_tilemap(tilemap("""
        level1
        """))
    venedora = sprites.create(img("""
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
            """),
        SpriteKind.player)
    venedora.say_text("Apropa't per comprar")
    venedora.set_position(71, 57)
    nena = sprites.create(assets.image("""
        nena-front
        """), SpriteKind.player)
    controller.move_sprite(nena)
    scene.camera_follow_sprite(nena)
    info.set_score(0)
    for index in range(30):
        arbre2 = sprites.create(img("""
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
                """),
            SpriteKind.enemy)
        arbre2.set_position(randint(0, 300), randint(0, 300))
    nena.set_position(pos_x, pos_y)
    if arbres_talats == 30:
        for index2 in range(30):
            arbre2 = sprites.create(img("""
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
                    """),
                SpriteKind.enemy)
            arbre2.set_position(randint(0, 300), randint(0, 300))

def on_right_pressed():
    animation.run_image_animation(nena,
        assets.animation("""
            nena-animation-right
            """),
        500,
        False)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_down_pressed():
    animation.run_image_animation(nena,
        assets.animation("""
            nena-animation-down
            """),
        500,
        False)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_on_overlap(sprite, otherSprite):
    global menu_obert, pos_x, pos_y, myMenu
    if menu_obert == 0:
        scene.center_camera_at(80, 60)
        tiles.set_current_tilemap(tilemap("""
            level2
            """))
        menu_obert = 1
        pos_x = nena.x
        pos_y = nena.y
        sprites.destroy_all_sprites_of_kind(SpriteKind.player)
        sprites.destroy_all_sprites_of_kind(SpriteKind.enemy)
        myMenu = miniMenu.create_menu(miniMenu.create_menu_item("1 Gallina = 6 troncs"),
            miniMenu.create_menu_item("1 Patata = 2 troncs"),
            miniMenu.create_menu_item("1 Xai = 5 troncs"),
            miniMenu.create_menu_item("12 Ous = 3 troncs"),
            miniMenu.create_menu_item("1 Caball = 12 troncs"))
        myMenu.set_title("Canvi (Enter per comprar)")
        game.splash("\"A\" per sortir")
        game.splash("\"B\" per comprar")
        
        def on_button_pressed(selection, undefined):
            global gallina, patata, xai, ous, caball
            if info.score() >= 6:
                if selection == "1 Gallina = 6 troncs":
                    music.play(music.melody_playable(music.ba_ding),
                        music.PlaybackMode.UNTIL_DONE)
                    game.show_long_text("+ 1 Gallina", DialogLayout.BOTTOM)
                    gallina = gallina + 1
                    info.set_score(info.score() - 6)
            if info.score() >= 2:
                if selection == "1 Patata = 2 troncs":
                    music.play(music.melody_playable(music.ba_ding),
                        music.PlaybackMode.UNTIL_DONE)
                    game.show_long_text("+ 1 Patata (1.5kg)", DialogLayout.BOTTOM)
                    patata = patata + 1
                    info.set_score(info.score() - 2)
            if info.score() >= 5:
                if selection == "1 Xai = 5 troncs":
                    music.play(music.melody_playable(music.ba_ding),
                        music.PlaybackMode.UNTIL_DONE)
                    game.show_long_text("+ 1 Xai", DialogLayout.BOTTOM)
                    xai = xai + 1
                    info.set_score(info.score() - 5)
            if info.score() >= 3:
                if selection == "12 Ous = 3 troncs":
                    music.play(music.melody_playable(music.ba_ding),
                        music.PlaybackMode.UNTIL_DONE)
                    game.show_long_text("+12 Ous", DialogLayout.BOTTOM)
                    ous = ous + 12
                    info.set_score(info.score() - 5)
            if info.score() >= 12:
                if selection == "1 Caball = 12 troncs":
                    music.play(music.melody_playable(music.ba_ding),
                        music.PlaybackMode.UNTIL_DONE)
                    game.show_long_text("+1 Caball", DialogLayout.BOTTOM)
                    caball = caball + 1
                    info.set_score(info.score() - 12)
        myMenu.on_button_pressed(controller.B, on_button_pressed)
        
    else:
        sprites.destroy(myMenu)
        joc()
        menu_obert = 0
sprites.on_overlap(SpriteKind.player, SpriteKind.player, on_on_overlap)

caball = 0
ous = 0
xai = 0
patata = 0
gallina = 0
arbre2: Sprite = None
venedora: Sprite = None
pos_y = 0
pos_x = 0
myMenu: miniMenu.MenuSprite = None
menu_obert = 0
arbres_talats = 0
nena: Sprite = None
joc()
toolbar = Inventory.create_toolbar([], 7)
toolbar.left = 4
toolbar.bottom = scene.screen_height() - 4
toolbar.z = 100
toolbar.set_flag(SpriteFlag.RELATIVE_TO_CAMERA, True)