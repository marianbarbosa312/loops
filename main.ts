input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        basic.showNumber(index)
    }
    basic.clearScreen()
})
for (let index = 0; index < 10; index++) {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    basic.clearScreen()
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
}
basic.clearScreen()
