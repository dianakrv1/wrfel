input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showNumber(game.score())
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.showNumber(randint(1, 6))
    if (randint(1, 6) < 3) {
        basic.showIcon(IconNames.ArrowWest)
        game.addScore(1)
    }
    if (randint(1, 6) > 4) {
        basic.showIcon(IconNames.ArrowEast)
        game.addScore(1)
    }
})
