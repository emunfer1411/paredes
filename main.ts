let Velocidad = 40
let Velocidad_de_Giro = 40
let obstaculo = 0
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 5) {
        obstaculo = obstaculo + 1
        if (obstaculo == 1) {
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, Velocidad_de_Giro)
            basic.pause(1550)
            maqueen.motorStop(maqueen.Motors.All)
        }
        if (obstaculo == 2) {
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, Velocidad_de_Giro)
            basic.pause(2000)
            maqueen.motorStop(maqueen.Motors.All)
        }
        if (obstaculo == 3) {
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, Velocidad_de_Giro)
            basic.pause(2100)
            maqueen.motorStop(maqueen.Motors.All)
        }
        if (obstaculo == 4) {
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, Velocidad_de_Giro)
            basic.pause(1900)
            maqueen.motorStop(maqueen.Motors.All)
        }
        if (obstaculo == 5) {
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, Velocidad_de_Giro)
            basic.pause(1900)
            maqueen.motorStop(maqueen.Motors.All)
        }
        if (obstaculo < 7) {
            maqueen.motorStop(maqueen.Motors.All)
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Velocidad)
    }
})
