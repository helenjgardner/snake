input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Rabbit)
    basic.pause(100)
    basic.showIcon(IconNames.Target)
    basic.pause(100)
    basic.showIcon(IconNames.Tortoise)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Snake)
    basic.showIcon(IconNames.StickFigure)
    basic.showIcon(IconNames.Silly)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Cow)
    basic.showIcon(IconNames.Meh)
})
