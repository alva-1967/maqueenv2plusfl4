function rodaD2 () {
    maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
    basic.pause(500)
    while (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorL2) != 0) {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 150)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Backward, 150)
    }
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
    basic.pause(500)
}
function rodaE () {
    maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
    while (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorL2) != 0 && (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorL1) != 1 && (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorM) != 1 && maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorR1) != 1) && maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorR2) != 0)) {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Backward, 150)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 150)
    }
}
function rodaD1 () {
    maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
    while (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorR2) != 0 && maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorL2) != 0) {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 50)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Backward, 50)
    }
}
basic.clearScreen()
led.enable(false)
basic.forever(function () {
    if (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorL2) == 0 && (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorL1) == 1 && (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorM) == 1 && maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorR1) == 1) && maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorR2) == 0)) {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 70)
    } else if (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorL2) == 0 && (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorL1) == 0 && (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorM) == 1 && maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorR1) == 1) && maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorR2) == 1)) {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 70)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 0)
    } else if (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorL2) == 0 && (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorL1) == 0 && (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorM) == 0 && maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorR1) == 1) && maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorR2) == 1)) {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 0)
    } else if (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorL2) == 1 && (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorL1) == 1 && (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorM) == 1 && maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorR1) == 0) && maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorR2) == 0)) {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 70)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 0)
    } else if (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorL2) == 1 && (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorL1) == 1 && (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorM) == 0 && maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorR1) == 0) && maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorR2) == 0)) {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 0)
    } else if (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorL2) == 1 && (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorL1) == 1 && (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorM) == 1 && maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorR1) == 1) && maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorR2) == 1)) {
        rodaD1()
    } else if (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorL2) == 1 && (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorL1) == 0 && (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorM) == 0 && maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorR1) == 0) && maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorR2) == 1)) {
        rodaE()
    }
})
