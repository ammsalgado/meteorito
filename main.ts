input.onButtonPressed(Button.A, function () {
    if (naveI > 0) {
        led.unplot(naveI, 4)
        naveI = naveI - 1
        led.plot(naveI, 4)
    } else {
        led.unplot(naveI, 4)
        naveI = 4
        led.plot(naveI, 4)
    }
})
input.onButtonPressed(Button.AB, function () {
    reiniciar()
})
input.onButtonPressed(Button.B, function () {
    if (naveI < 4) {
        led.unplot(naveI, 4)
        naveI = naveI + 1
        led.plot(naveI, 4)
    } else {
        led.unplot(naveI, 4)
        naveI = 0
        led.plot(naveI, 4)
    }
})
function reiniciar () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showNumber(3)
    basic.pause(100)
    basic.showNumber(2)
    basic.pause(100)
    basic.showNumber(1)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    tiempo = 1000
    naveI = 2
    led.plot(naveI, 4)
    fin += 1
    meteo2 = 6
    meteo3 = 6
    meteo4 = 6
    meteo5 = 6
    meteo6 = 6
    meteo7 = 6
    meteo8 = 6
    meteo9 = 6
}
let meteo0 = 0
let meteo1 = 0
let meteo9 = 0
let meteo8 = 0
let meteo7 = 0
let meteo6 = 0
let meteo5 = 0
let meteo4 = 0
let meteo3 = 0
let meteo2 = 0
let fin = 0
let tiempo = 0
let naveI = 0
reiniciar()
basic.forever(function () {
    while (fin) {
        meteo9 = meteo7
        meteo8 = meteo6
        meteo7 = meteo5
        meteo6 = meteo4
        meteo5 = meteo3
        meteo4 = meteo2
        meteo3 = meteo1
        meteo2 = meteo0
        meteo1 = randint(0, 6)
        meteo0 = randint(0, 6)
        if (naveI == meteo8 || naveI == meteo9) {
            fin = 0
            basic.showIcon(IconNames.Sad)
            music.playMelody("C5 A B G A F G E ", 194)
        } else {
            led.plot(meteo0, 0)
            led.plot(meteo1, 0)
            led.plot(meteo2, 1)
            led.plot(meteo3, 1)
            led.plot(meteo4, 2)
            led.plot(meteo5, 2)
            led.plot(meteo6, 3)
            led.plot(meteo7, 3)
            basic.pause(tiempo)
            tiempo = tiempo - 10
            led.unplot(meteo0, 0)
            led.unplot(meteo1, 0)
            led.unplot(meteo2, 1)
            led.unplot(meteo3, 1)
            led.unplot(meteo4, 2)
            led.unplot(meteo5, 2)
            led.unplot(meteo6, 3)
            led.unplot(meteo7, 3)
        }
    }
})
