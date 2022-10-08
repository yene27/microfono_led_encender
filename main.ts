input.onSound(DetectedSound.Loud, function () {
    if (estado == "on") {
        pins.digitalWritePin(DigitalPin.P0, 1)
        estado = "off"
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
        estado = "on"
    }
})
let estado = ""
estado = "on"
