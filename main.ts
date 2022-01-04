input.onButtonPressed(Button.A, function () {
    směr = 1
})
input.onButtonPressed(Button.AB, function () {
    směr = 3
})
input.onButtonPressed(Button.B, function () {
    směr = 2
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    směr = 4
})
let směr = 0
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        směr = 5
        basic.showString("MIMO VOZIDEL STAVBY")
    }
    if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        směr = 6
        basic.showString("POZOR")
    }
})
basic.forever(function () {
    while (směr == 4) {
        pins.digitalWritePin(DigitalPin.P15, 1)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        music.playTone(988, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    pins.digitalWritePin(DigitalPin.P15, 0)
    while (směr == 3) {
        pins.digitalWritePin(DigitalPin.P14, 1)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        music.playTone(988, music.beat(BeatFraction.Sixteenth))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    pins.digitalWritePin(DigitalPin.P14, 0)
    while (směr == 2) {
        pins.digitalWritePin(DigitalPin.P14, 1)
        basic.showLeds(`
            # . . . #
            . # . . #
            . . # . #
            . . . # #
            # # # # #
            `)
        music.playTone(988, music.beat(BeatFraction.Sixteenth))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        pins.digitalWritePin(DigitalPin.P14, 0)
    }
    while (směr == 1) {
        pins.digitalWritePin(DigitalPin.P14, 1)
        basic.showLeds(`
            # . . . #
            # . . # .
            # . # . .
            # # . . .
            # # # # #
            `)
        music.playTone(988, music.beat(BeatFraction.Sixteenth))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        pins.digitalWritePin(DigitalPin.P14, 0)
    }
    while (směr == 5) {
        pins.digitalWritePin(DigitalPin.P15, 1)
        basic.pause(100)
    }
    pins.digitalWritePin(DigitalPin.P15, 0)
    while (směr == 6) {
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P14, 1)
        basic.pause(100)
    }
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        for (let index = 0; index < 9; index++) {
            music.playMelody("C5 C C5 C C5 C C5 C ", 250)
        }
    }
    if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        music.playMelody("C D C D C D C D ", 120)
    }
})
