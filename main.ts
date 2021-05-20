input.onButtonPressed(Button.A, function () {
    rpm += -5000
})
input.onButtonPressed(Button.B, function () {
    if (Gear < 9) {
        rpm += -5000
        Gear += 1
        basic.showNumber(Gear)
    }
})
let Gear = 0
Gear = 1
radio.setGroup(111)
let myImage = 0
let rpm = 100
basic.forever(function () {
    if (rpm < 8000 && !(input.buttonIsPressed(Button.A))) {
        rpm += 250 / Gear
        led.plotBarGraph(
        rpm,
        8000
        )
    } else {
        led.plotBarGraph(
        0,
        1
        )
        basic.pause(30)
        led.plotBarGraph(
        1,
        1
        )
        basic.pause(30)
    }
})
