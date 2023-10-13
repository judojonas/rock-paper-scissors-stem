def check():
    global score, andere_score, keuze
    if keuze == andere_keuze:
        basic.show_leds("""
            . . . . .
            . # # # .
            . . . . .
            . # # # .
            . . . . .
            """)
    elif keuze == 1 and andere_keuze == 3:
        score += 1
        basic.show_leds("""
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            """)
    elif keuze == 3 and andere_keuze == 1:
        andere_score += 1
        basic.show_leds("""
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            """)
    elif keuze < andere_keuze:
        basic.show_leds("""
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            """)
        andere_score += 1
    elif keuze > andere_keuze:
        basic.show_leds("""
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            """)
        score += 1
    else:
        basic.show_string("somthing went wrong")
    keuze = 0

def on_received_number(receivedNumber):
    global andere_keuze
    if keuze == 0:
        andere_keuze = receivedNumber
        while 0 == 0:
            if not (keuze == 0):
                check()
                break
    else:
        andere_keuze = receivedNumber
        check()
radio.on_received_number(on_received_number)

def on_button_pressed_b():
    global keuze
    keuze = randint(1, 3)
    if keuze == 1:
        basic.show_leds("""
            . . # . .
            . # # # .
            . # # # .
            . # # # .
            . . # . .
            """)
    elif keuze == 2:
        basic.show_leds("""
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            """)
    else:
        basic.show_leds("""
            . . . . .
            . # # # .
            # # # # #
            . # # # .
            . . . . .
            """)
    radio.send_number(keuze)
input.on_button_pressed(Button.B, on_button_pressed_b)

andere_score = 0
score = 0
andere_keuze = 0
keuze = 0
radio.set_group(1)

def on_forever():
    if score > 4:
        basic.show_leds("""
            . . . . .
            # . # . #
            # # # # #
            # # # # #
            . . . . .
            """)
    if andere_score > 4:
        basic.show_icon(IconNames.SKULL)
basic.forever(on_forever)
