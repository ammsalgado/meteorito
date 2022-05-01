def on_button_pressed_a():
    global naveI
    if naveI > 0:
        led.unplot(naveI, 4)
        naveI = naveI - 1
        led.plot(naveI, 4)
    else:
        led.unplot(naveI, 4)
        naveI = 4
        led.plot(naveI, 4)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global naveI
    if naveI < 4:
        led.unplot(naveI, 4)
        naveI = naveI + 1
        led.plot(naveI, 4)
    else:
        led.unplot(naveI, 4)
        naveI = 0
        led.plot(naveI, 4)
input.on_button_pressed(Button.B, on_button_pressed_b)

fin = 0
naveI = 0
naveI = 0
led.plot(naveI, 4)
fin += 1
arraymeteo = [0, 10]
indice = 0

def on_forever():
    while fin:
        arraymeteo[0] = randint(0, 6)
        arraymeteo[1] = randint(0, 6)
        arraymeteo[indice + 1] = 0
        arraymeteo[indice + 2] = 0
basic.forever(on_forever)
