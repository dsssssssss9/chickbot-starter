input.onButtonPressed(Button.A, function () {
    Motors = GoForward
    basic.pause(1000)
    Motors = Stop
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Go!")
    music.playTone(262, 500)
    basic.clearScreen()
    Motors = GoForward
    basic.pause(2000)
    Motors = TurnRight
    basic.pause(pause4Turn90)
    Motors = GoBackward
    basic.pause(1000)
    Motors = Stop
    music.playTone(262, 250)
    basic.pause(250)
    Motors = SoftTurnLeft
    basic.pause(pause4SoftTurn90 * 3)
    Motors = GoForward
    basic.pause(1000)
    Motors = Stop
    music.playTone(262, 500)
})
input.onButtonPressed(Button.B, function () {
    Motors = Stop
})
let pause4SoftTurn90 = 0
let pause4Turn90 = 0
let SoftTurnLeft = 0
let TurnRight = 0
let GoBackward = 0
let GoForward = 0
let Stop = 0
let Motors = 0
Motors = 0
Stop = 0
GoForward = 1
GoBackward = 2
TurnRight = 3
let TurnLeft = 4
let SoftTurnRight = 5
SoftTurnLeft = 6
pause4Turn90 = 300
pause4SoftTurn90 = 600
music.playTone(262, 500)
basic.showString("CB")
basic.forever(function () {
    if (Motors == Stop) {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.showString("S")
    } else if (Motors == GoForward) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.showString("F")
    } else if (Motors == GoBackward) {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P16, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.showString("B")
    } else if (Motors == TurnRight) {
        // R
        pins.digitalWritePin(DigitalPin.P8, 0)
        // R
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.showString("R")
    } else if (Motors == TurnLeft) {
        // R
        pins.digitalWritePin(DigitalPin.P8, 1)
        // R
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.showString("L")
    } else if (Motors == SoftTurnRight) {
        // R
        pins.digitalWritePin(DigitalPin.P8, 0)
        // R
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.showString("R")
    } else if (Motors == SoftTurnLeft) {
        // R
        pins.digitalWritePin(DigitalPin.P8, 1)
        // R
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.showString("L")
    } else {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.showString("S")
    }
})
