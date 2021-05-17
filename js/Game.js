class Game {
    constructor() {

    }
    start() {
        if (gameState === 0) {


            form = new Form()
            form.display()

            player = new Player();
            player.getCount()
        }
    }
    readState() {
        var statecount = database.ref('gameState');
        statecount.on("value", (data) => {
            gameState = data.val()
        })
    }
    updateState(gcount) {
        database.ref('/').update({ gameState: gcount })
    }

    play() {
        form.hide()
        text("Game: Started!", 420, 300)
        Player.getPlayerInfo()

        if (allPlayers !== undefined) {
            var y = 130
            for (var plr in allPlayers) {
                if (plr === "player" + player.index) {
                    fill("green")
                }
                else {
                    fill("black")
                }
                text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120, y)
                y = y + 50
            }
        }
        if (keyIsDown(UP_ARROW) && player.index != null) {
            player.dis = player.dis + 10
            player.update()
        }


    }

}