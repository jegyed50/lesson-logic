let randomnumber = 0
input.onButtonPressed(Button.A, function () {
    randomnumber = randint(0, 1)
    if (randomnumber == 0) {
        basic.showLeds(`
            . . # . .
            . # # . .
            # . # . .
            . . # . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . # # .
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    randomnumber = randint(1, 6)
    if (randomnumber == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (randomnumber == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . # .
            . . . . .
            . . . . .
            `)
    } else if (randomnumber == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . # . #
            . . . . .
            . . . . .
            `)
    } else if (randomnumber == 4) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    } else if (randomnumber == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    } else {
        basic.showLeds(`
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            `)
    }
    basic.pause(500)
    basic.clearScreen()
})
basic.forever(function () {
	
})
