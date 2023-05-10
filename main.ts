basic.forever(function () {
    if (BitPlayer.OnJoystick(Joystick.Up)) {
        radio.sendString("Up")
    }
    if (BitPlayer.OnJoystick(Joystick.Middle)) {
        radio.sendString("Middle")
    }
    if (BitPlayer.OnJoystick(Joystick.Down)) {
        radio.sendString("Down")
    }
    if (BitPlayer.OnJoystick(Joystick.UpLeft)) {
        radio.sendString("UpLeft")
    }
    if (BitPlayer.OnJoystick(Joystick.LowerLeft)) {
        radio.sendString("LowerLeft")
    }
    if (BitPlayer.OnJoystick(Joystick.UpRight)) {
        radio.sendString("UpRight")
    }
    if (BitPlayer.OnJoystick(Joystick.LowerRight)) {
        radio.sendString("LowerRight")
    }
    if (BitPlayer.OnJoystick(Joystick.Left)) {
        radio.sendString("Left")
    }
    if (BitPlayer.OnJoystick(Joystick.Right)) {
        radio.sendString("Right")
    }
    if (BitPlayer.KeyPressed(BitPlayerKey.key_A)) {
        radio.sendString("A")
    }
    if (BitPlayer.KeyPressed(BitPlayerKey.key_B)) {
        radio.sendString("B")
    }
    if (BitPlayer.KeyPressed(BitPlayerKey.key_C)) {
        radio.sendString("C")
    }
    if (BitPlayer.KeyPressed(BitPlayerKey.key_D)) {
        radio.sendString("D")
    }
    if (BitPlayer.KeyPressed(BitPlayerKey.key_L)) {
        radio.sendString("L")
    }
    if (BitPlayer.KeyPressed(BitPlayerKey.key_R)) {
        radio.sendString("R")
    }
})
