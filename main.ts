let count = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        count += 1
        basic.showNumber(count)
    }
    if (input.buttonIsPressed(Button.B)) {
        count += -1
        basic.showNumber(count)
    }
})
