function check() {
    
    if (keuze == andere_keuze) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . . .
            . # # # .
            . . . . .
            `)
    } else if (keuze == 1 && andere_keuze == 3) {
        score += 1
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
    } else if (keuze == 3 && andere_keuze == 1) {
        andere_score += 1
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
    } else if (keuze < andere_keuze) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
        andere_score += 1
    } else if (keuze > andere_keuze) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        score += 1
    } else {
        basic.showString("somthing went wrong")
    }
    
    keuze = 0
}

radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    
    if (keuze == 0) {
        andere_keuze = receivedNumber
        while ((0 as any) == (0 as any)) {
            if (!(keuze == 0)) {
                check()
                break
            }
            
        }
    } else {
        andere_keuze = receivedNumber
        check()
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    keuze = randint(1, 3)
    if (keuze == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            . # # # .
            . . # . .
            `)
    } else if (keuze == 2) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # #
            . # # # .
            . . . . .
            `)
    }
    
    radio.sendNumber(keuze)
})
let andere_score = 0
let score = 0
let andere_keuze = 0
let keuze = 0
radio.setGroup(1)
basic.forever(function on_forever() {
    if (score > 4) {
        basic.showLeds(`
            . . . . .
            # . # . #
            # # # # #
            # # # # #
            . . . . .
            `)
    }
    
    if (andere_score > 4) {
        basic.showIcon(IconNames.Skull)
    }
    
})
