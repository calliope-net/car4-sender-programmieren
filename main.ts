input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    car4sender.programm6(
    car4sender.programmBlock(70, 90, 50),
    car4sender.programmBlock(-70, 90, 50),
    car4sender.programmBlock(50, 125, 20),
    car4sender.programmBlock(-50, 45, 20),
    car4sender.programmBlock(100, 90, 100)
    )
    car4sender.sendBuffer0_setBit(car4sender.eBufferBit.x80_MotorPower, true)
    car4sender.sendBuffer0_setBit(car4sender.eBufferBit.fahrenStrecke, true)
})
car4sender.beimStart(240)
loops.everyInterval(750, function () {
    basic.setLedColor(0x0000ff)
    car4sender.sendBuffer19()
    basic.turnRgbLedOff()
})
