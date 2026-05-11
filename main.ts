input.onButtonPressed(Button.A, function () {
    ANGLE += -2
    servos.P1.setAngle(ANGLE)
    basic.showString("" + (ANGLE))
})
input.onButtonPressed(Button.B, function () {
    ANGLE += 2
    servos.P1.setAngle(ANGLE)
    basic.showString("" + (ANGLE))
})
let ANGLE = 0
ANGLE = 90
basic.showString("" + (ANGLE))
servos.P1.setAngle(ANGLE)
