// Auto-generated. Do not edit.


    /**
     * Creation, manipulation and display of LED images.
     */
    //% color=#5C2D91 weight=31 icon="\uf03e"
    //% advanced=true
declare namespace images {

    /**
     * Creates an image that fits on the LED screen.
     */
    //% weight=75 help=images/create-image
    //% blockId=device_build_image block="create image"
    //% parts="ledmatrix" imageLiteral=1 shim=images::createImage
    function createImage(leds: string): Image;

    /**
     * Creates an image with 2 frames.
     */
    //% weight=74 help=images/create-big-image
    //% blockId=device_build_big_image block="create big image" imageLiteral=2
    //% parts="ledmatrix" shim=images::createBigImage
    function createBigImage(leds: string): Image;
}


declare interface Image {
    /**
     * Plots the image at a given column to the screen
     */
    //% help=images/plot-image
    //% parts="ledmatrix" xOffset.defl=0 shim=ImageMethods::plotImage
    plotImage(xOffset?: number): void;

    /**
     * Shows an frame from the image at offset ``x offset``.
     * @param xOffset column index to start displaying the image
     */
    //% help=images/show-image weight=80 blockNamespace=images
    //% blockId=device_show_image_offset block="show image %sprite|at offset %offset" blockGap=8
    //% parts="ledmatrix" shim=ImageMethods::showImage
    showImage(xOffset: number): void;

    /**
     * Draws the ``index``-th frame of the image on the screen.
     * @param xOffset column index to start displaying the image
     */
    //% help=images/plot-frame weight=80
    //% parts="ledmatrix" shim=ImageMethods::plotFrame
    plotFrame(xOffset: number): void;

    /**
     * Scrolls an image .
     * @param frameOffset x offset moved on each animation step, eg: 1, 2, 5
     * @param interval time between each animation step in milli seconds, eg: 200
     */
    //% help=images/scroll-image weight=79 async blockNamespace=images
    //% blockId=device_scroll_image block="scroll image %sprite|with offset %frameoffset|and interval (ms) %delay" blockGap=8
    //% parts="ledmatrix" shim=ImageMethods::scrollImage
    scrollImage(frameOffset: number, interval: number): void;

    /**
     * Sets all pixels off.
     */
    //% help=images/clear
    //% parts="ledmatrix" shim=ImageMethods::clear
    clear(): void;

    /**
     * Sets a specific pixel brightness at a given position
     */
    //%
    //% parts="ledmatrix" shim=ImageMethods::setPixelBrightness
    setPixelBrightness(x: number, y: number, value: number): void;

    /**
     * Gets the pixel brightness ([0..255]) at a given position
     */
    //%
    //% parts="ledmatrix" shim=ImageMethods::pixelBrightness
    pixelBrightness(x: number, y: number): number;

    /**
     * Gets the width in columns
     */
    //% help=functions/width shim=ImageMethods::width
    width(): number;

    /**
     * Gets the height in rows (always 5)
     */
    //% shim=ImageMethods::height
    height(): number;

    /**
     * Set a pixel state at position ``(x,y)``
     * @param x TODO
     * @param y TODO
     * @param value TODO
     */
    //% help=images/set-pixel
    //% parts="ledmatrix" shim=ImageMethods::setPixel
    setPixel(x: number, y: number, value: boolean): void;

    /**
     * Get the pixel state at position ``(x,y)``
     * @param x TODO
     * @param y TODO
     */
    //% help=images/pixel
    //% parts="ledmatrix" shim=ImageMethods::pixel
    pixel(x: number, y: number): boolean;

    /**
     * Shows a particular frame of the image strip.
     * @param frame TODO
     */
    //% weight=70 help=images/show-frame
    //% parts="ledmatrix" shim=ImageMethods::showFrame
    showFrame(frame: number): void;
}


    /**
     * Provides access to basic micro:bit functionality.
     */
    //% color=#0078D7 weight=100 icon="\uf00a"
declare namespace basic {

    /**
     * Scroll a number on the screen. If the number fits on the screen (i.e. is a single digit), do not scroll.
     * @param interval speed of scroll; eg: 150, 100, 200, -100
     */
    //% help=basic/show-number
    //% weight=96
    //% blockId=device_show_number block="show|number %number" blockGap=8
    //% async
    //% parts="ledmatrix" interval.defl=150 shim=basic::showNumber
    function showNumber(value: number, interval?: number): void;

    /**
     * Draws an image on the LED screen.
     * @param leds the pattern of LED to turn on/off
     * @param interval time in milliseconds to pause after drawing
     */
    //% help=basic/show-leds 
    //% weight=95 blockGap=8
    //% imageLiteral=1 async
    //% blockId=device_show_leds
    //% block="show leds" icon="\uf00a"
    //% parts="ledmatrix" interval.defl=400 shim=basic::showLeds
    function showLeds(leds: string, interval?: number): void;

    /**
     * Display text on the display, one character at a time. If the string fits on the screen (i.e. is one letter), does not scroll.
     * @param text the text to scroll on the screen, eg: "Hello!"
     * @param interval how fast to shift characters; eg: 150, 100, 200, -100
     */
    //% help=basic/show-string 
    //% weight=87 blockGap=8
    //% block="show|string %text" 
    //% async
    //% blockId=device_print_message
    //% parts="ledmatrix" interval.defl=150 shim=basic::showString
    function showString(text: string, interval?: number): void;

    /**
     * Turn off all LEDs
     */
    //% help=basic/clear-screen weight=79
    //% blockId=device_clear_display block="clear screen"
    //% parts="ledmatrix" shim=basic::clearScreen
    function clearScreen(): void;

    /**
     * Shows a sequence of LED screens as an animation.
     * @param leds pattern of LEDs to turn on/off
     * @param interval time in milliseconds between each redraw
     */
    //% help=basic/show-animation imageLiteral=1 async
    //% parts="ledmatrix" interval.defl=400 shim=basic::showAnimation
    function showAnimation(leds: string, interval?: number): void;

    /**
     * Draws an image on the LED screen.
     * @param leds pattern of LEDs to turn on/off
     */
    //% help=basic/plot-leds weight=80
    //% parts="ledmatrix" imageLiteral=1 shim=basic::plotLeds
    function plotLeds(leds: string): void;

    /**
     * Repeats the code forever in the background. On each iteration, allows other codes to run.
     * @param body code to execute
     */
    //% help=basic/forever weight=55 blockGap=8 blockAllowMultiple=1
    //% blockId=device_forever block="forever" icon="\uf01e" shim=basic::forever
    function forever(a: () => void): void;

    /**
     * Pause for the specified time in milliseconds
     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
     */
    //% help=basic/pause weight=54
    //% async block="pause (ms) %pause"
    //% blockId=device_pause icon="\uf110" shim=basic::pause
    function pause(ms: number): void;
}



    //% color=300 weight=99 icon="\uf192"
declare namespace input {

    /**
     * Do something when a button (``A``, ``B`` or both ``A+B``) is pressed
     * @param button the button that needs to be pressed
     * @param body code to run when event is raised
     */
    //% help=input/on-button-pressed weight=85 blockGap=8
    //% blockId=device_button_event block="on button|%NAME|pressed"
    //% parts="buttonpair" shim=input::onButtonPressed
    function onButtonPressed(button: Button, body: () => void): void;

    /**
     * Do something when when a gesture is done (like shaking the micro:bit).
     * @param gesture the type of gesture to track, eg: Gesture.Shake
     * @param body code to run when gesture is raised
     */
    //% help=input/on-gesture weight=84 blockGap=8
    //% blockId=device_gesture_event block="on |%NAME"
    //% parts="accelerometer" shim=input::onGesture
    function onGesture(gesture: Gesture, body: () => void): void;

    /**
     * Do something when a pin is pressed.
     * @param name the pin that needs to be pressed, eg: TouchPin.P0
     * @param body the code to run when the pin is pressed
     */
    //% help=input/on-pin-pressed weight=83
    //% blockId=device_pin_event block="on pin %name|pressed" shim=input::onPinPressed
    function onPinPressed(name: TouchPin, body: () => void): void;

    /**
     * Do something when a pin is released.
     * @param name the pin that needs to be released, eg: TouchPin.P0
     * @param body the code to run when the pin is released
     */
    //% help=input/on-pin-released weight=6 blockGap=8
    //% blockId=device_pin_released block="on pin %NAME|released"
    //% advanced=true shim=input::onPinReleased
    function onPinReleased(name: TouchPin, body: () => void): void;

    /**
     * Get the button state (pressed or not) for ``A`` and ``B``.
     * @param button the button to query the request, eg: Button.A
     */
    //% help=input/button-is-pressed weight=60
    //% block="button|%NAME|is pressed"
    //% blockId=device_get_button2
    //% icon="\uf192" blockGap=8
    //% parts="buttonpair" shim=input::buttonIsPressed
    function buttonIsPressed(button: Button): boolean;

    /**
     * Get the pin state (pressed or not). Requires to hold the ground to close the circuit.
     * @param name pin used to detect the touch, eg: TouchPin.P0
     */
    //% help=input/pin-is-pressed weight=58
    //% blockId="device_pin_is_pressed" block="pin %NAME|is pressed"
    //% blockGap=8 shim=input::pinIsPressed
    function pinIsPressed(name: TouchPin): boolean;

    /**
     * Get the acceleration value in milli-gravitys (when the board is laying flat with the screen up, x=0, y=0 and z=-1024)
     * @param dimension TODO
     */
    //% help=input/acceleration weight=58
    //% blockId=device_acceleration block="acceleration (mg)|%NAME" blockGap=8
    //% parts="accelerometer" shim=input::acceleration
    function acceleration(dimension: Dimension): number;

    /**
     * Reads the light level applied to the LED screen in a range from ``0`` (dark) to ``255`` bright.
     */
    //% help=input/light-level weight=57
    //% blockId=device_get_light_level block="light level" blockGap=8
    //% parts="ledmatrix" shim=input::lightLevel
    function lightLevel(): number;

    /**
     * Get the current compass heading in degrees.
     */
    //% help=input/compass-heading
    //% weight=56
    //% blockId=device_heading block="compass heading (°)" blockGap=8
    //% parts="compass" shim=input::compassHeading
    function compassHeading(): number;

    /**
     * Gets the temperature in Celsius degrees (°C).
     */
    //% weight=55
    //% help=input/temperature
    //% blockId=device_temperature block="temperature (°C)" blockGap=8
    //% parts="thermometer" shim=input::temperature
    function temperature(): number;

    /**
     * The pitch or roll of the device, rotation along the ``x-axis`` or ``y-axis``, in degrees.
     * @param kind TODO
     */
    //% help=input/rotation weight=52
    //% blockId=device_get_rotation block="rotation (°)|%NAME" blockGap=8
    //% parts="accelerometer" advanced=true shim=input::rotation
    function rotation(kind: Rotation): number;

    /**
     * Get the magnetic force value in ``micro-Teslas`` (``µT``). This function is not supported in the simulator.
     * @param dimension TODO
     */
    //% help=input/magnetic-force weight=51
    //% blockId=device_get_magnetic_force block="magnetic force (µT)|%NAME" blockGap=8
    //% parts="compass"
    //% advanced=true shim=input::magneticForce
    function magneticForce(dimension: Dimension): number;

    /**
     * Gets the number of milliseconds elapsed since power on.
     */
    //% help=input/running-time weight=50
    //% blockId=device_get_running_time block="running time (ms)"
    //% advanced=true shim=input::runningTime
    function runningTime(): number;

    /**
     * Obsolete, compass calibration is automatic.
     */
    //% help=input/calibrate weight=0 shim=input::calibrate
    function calibrate(): void;

    /**
     * Sets the accelerometer sample range in gravities.
     * @param range a value describe the maximum strengh of acceleration measured
     */
    //% help=input/set-accelerometer-range
    //% blockId=device_set_accelerometer_range block="set accelerometer|range %range"
    //% weight=5
    //% parts="accelerometer"
    //% advanced=true shim=input::setAccelerometerRange
    function setAccelerometerRange(range: AcceleratorRange): void;
}



    //% weight=1 color="#333333"
    //% advanced=true
declare namespace control {

    /**
     * Schedules code that run in the background.
     */
    //% help=control/in-background blockAllowMultiple=1 blockStatement=1
    //% blockId="control_in_background" block="run in background" blockGap=8 shim=control::inBackground
    function inBackground(a: () => void): void;

    /**
     * Resets the BBC micro:bit.
     */
    //% weight=30 async help=control/reset blockGap=8
    //% blockId="control_reset" block="reset" shim=control::reset
    function reset(): void;

    /**
     * Blocks the current fiber for the given microseconds
     * @param micros number of micro-seconds to wait. eg: 4
     */
    //% help=control/wait-micros weight=29
    //% blockId="control_wait_us" block="wait (µs)%micros" shim=control::waitMicros
    function waitMicros(micros: number): void;

    /**
     * Raises an event in the event bus.
     * @param src ID of the MicroBit Component that generated the event e.g. MICROBIT_ID_BUTTON_A.
     * @param value Component specific code indicating the cause of the event.
     * @param mode optional definition of how the event should be processed after construction (default is CREATE_AND_FIRE).
     */
    //% weight=21 blockGap=12 blockId="control_raise_event" block="raise event|from source %src=control_event_source_id|with value %value=control_event_value_id" blockExternalInputs=1
    //% mode.defl=1 shim=control::raiseEvent
    function raiseEvent(src: number, value: number, mode?: EventCreationMode): void;

    /**
     * Raises an event in the event bus.
     */
    //% weight=20 blockGap=8 blockId="control_on_event" block="on event|from %src=control_event_source_id|with value %value=control_event_value_id"
    //% blockExternalInputs=1 shim=control::onEvent
    function onEvent(src: number, value: number, handler: () => void): void;

    /**
     * Gets the value of the last event executed on the bus
     */
    //% blockId=control_event_value" block="event value"
    //% weight=18 shim=control::eventValue
    function eventValue(): number;

    /**
     * Gets the timestamp of the last event executed on the bus
     */
    //% blockId=control_event_timestamp" block="event timestamp"
    //% weight=19 blockGap=8 shim=control::eventTimestamp
    function eventTimestamp(): number;

    /**
     * Gets a friendly name for the device derived from the its serial number
     */
    //% blockId="control_device_name" block="device name" weight=10 blockGap=8 shim=control::deviceName
    function deviceName(): string;

    /**
     * Derive a unique, consistent serial number of this device from internal data.
     */
    //% blockId="control_device_serial_number" block="device serial number" weight=9 shim=control::deviceSerialNumber
    function deviceSerialNumber(): number;
}



    //% color=3 weight=35 icon="\uf205"
declare namespace led {

    /**
     * Turn on the specified LED using x, y coordinates (x is horizontal, y is vertical). (0,0) is upper left.
     * @param x TODO
     * @param y TODO
     */
    //% help=led/plot weight=78
    //% blockId=device_plot block="plot|x %x|y %y" blockGap=8
    //% parts="ledmatrix" shim=led::plot
    function plot(x: number, y: number): void;

    /**
     * Turn off the specified LED using x, y coordinates (x is horizontal, y is vertical). (0,0) is upper left.
     * @param x TODO
     * @param y TODO
     */
    //% help=led/unplot weight=77
    //% blockId=device_unplot block="unplot|x %x|y %y" blockGap=8
    //% parts="ledmatrix" shim=led::unplot
    function unplot(x: number, y: number): void;

    /**
     * Get the on/off state of the specified LED using x, y coordinates. (0,0) is upper left.
     * @param x TODO
     * @param y TODO
     */
    //% help=led/point weight=76
    //% blockId=device_point block="point|x %x|y %y"
    //% parts="ledmatrix" shim=led::point
    function point(x: number, y: number): boolean;

    /**
     * Get the screen brightness from 0 (off) to 255 (full bright).
     */
    //% help=led/brightness weight=60
    //% blockId=device_get_brightness block="brightness" blockGap=8
    //% parts="ledmatrix"
    //% advanced=true shim=led::brightness
    function brightness(): number;

    /**
     * Set the screen brightness from 0 (off) to 255 (full bright).
     * @param value the brightness value, eg:255, 127, 0
     */
    //% help=led/set-brightness weight=59
    //% blockId=device_set_brightness block="set brightness %value"
    //% parts="ledmatrix"
    //% advanced=true shim=led::setBrightness
    function setBrightness(value: number): void;

    /**
     * Cancels the current animation and clears other pending animations.
     */
    //% weight=50 help=led/stop-animation
    //% blockId=device_stop_animation block="stop animation"
    //% parts="ledmatrix"
    //% advanced=true shim=led::stopAnimation
    function stopAnimation(): void;

    /**
     * Sets the display mode between black and white and greyscale for rendering LEDs.
     * @param mode mode the display mode in which the screen operates
     */
    //% weight=1 help=led/set-display-mode
    //% parts="ledmatrix" advanced=true shim=led::setDisplayMode
    function setDisplayMode(mode: DisplayMode): void;

    /**
     * Turns on or off the display    
     */
    //% help=led/enable blockId=device_led_enable block="led enable %on"
    //% advanced=true parts="ledmatrix" shim=led::enable
    function enable(on: boolean): void;

    /**
     * Takes a screenshot of the LED screen and returns an image.
     */
    //% help=led/screenshot
    //% parts="ledmatrix" shim=led::screenshot
    function screenshot(): Image;
}
declare namespace pins {

    /**
     * Read the specified pin or connector as either 0 or 1
     * @param name pin to read from, eg: DigitalPin.P0
     */
    //% help=pins/digital-read-pin weight=30
    //% blockId=device_get_digital_pin block="digital read|pin %name" blockGap=8 shim=pins::digitalReadPin
    function digitalReadPin(name: DigitalPin): number;

    /**
     * Set a pin or connector value to either 0 or 1.
     * @param name pin to write to, eg: DigitalPin.P0
     * @param value value to set on the pin, 1 eg,0
     */
    //% help=pins/digital-write-pin weight=29
    //% blockId=device_set_digital_pin block="digital write|pin %name|to %value" shim=pins::digitalWritePin
    function digitalWritePin(name: DigitalPin, value: number): void;

    /**
     * Read the connector value as analog, that is, as a value comprised between 0 and 1023.
     * @param name pin to write to, eg: AnalogPin.P0
     */
    //% help=pins/analog-read-pin weight=25
    //% blockId=device_get_analog_pin block="analog read|pin %name" blockGap="8" shim=pins::analogReadPin
    function analogReadPin(name: AnalogPin): number;

    /**
     * Set the connector value as analog. Value must be comprised between 0 and 1023.
     * @param name pin name to write to, eg: AnalogPin.P0
     * @param value value to write to the pin between ``0`` and ``1023``. eg:1023,0
     */
    //% help=pins/analog-write-pin weight=24
    //% blockId=device_set_analog_pin block="analog write|pin %name|to %value" blockGap=8 shim=pins::analogWritePin
    function analogWritePin(name: AnalogPin, value: number): void;

    /**
     * Configures the Pulse-width modulation (PWM) of the analog output to the given value in **microseconds** or `1/1000` milliseconds.
     * If this pin is not configured as an analog output (using `analog write pin`), the operation has no effect.
     * @param name analog pin to set period to, eg: AnalogPin.P0
     * @param micros period in micro seconds. eg:20000
     */
    //% help=pins/analog-set-period weight=23 blockGap=8
    //% blockId=device_set_analog_period block="analog set period|pin %pin|to (µs)%micros" shim=pins::analogSetPeriod
    function analogSetPeriod(name: AnalogPin, micros: number): void;

    /**
     * Configures this pin to a digital input, and generates events where the timestamp is the duration that this pin was either ``high`` or ``low``.
     * @param name digital pin to register to, eg: DigitalPin.P0
     * @param pulse the value of the pulse, eg: PulseValue.High
     */
    //% help=pins/on-pulsed weight=22 blockGap=8 advanced=true
    //% blockId=pins_on_pulsed block="on|pin %pin|pulsed %pulse" shim=pins::onPulsed
    function onPulsed(name: DigitalPin, pulse: PulseValue, body: () => void): void;

    /**
     * Gets the duration of the last pulse in micro-seconds. This function should be called from a ``onPulsed`` handler.
     */
    //% help=pins/pulse-duration advanced=true
    //% blockId=pins_pulse_duration block="pulse duration (µs)"
    //% weight=21 blockGap=8 shim=pins::pulseDuration
    function pulseDuration(): number;

    /**
     * Returns the duration of a pulse in microseconds
     * @param name the pin which measures the pulse, eg: DigitalPin.P0
     * @param value the value of the pulse, eg: PulseValue.High
     * @param maximum duration in micro-seconds
     */
    //% blockId="pins_pulse_in" block="pulse in (µs)|pin %name|pulsed %value"
    //% weight=20 advanced=true maxDuration.defl=2000000 shim=pins::pulseIn
    function pulseIn(name: DigitalPin, value: PulseValue, maxDuration?: number): number;

    /**
     * Writes a value to the servo, controlling the shaft accordingly. On a standard servo, this will set the angle of the shaft (in degrees), moving the shaft to that orientation. On a continuous rotation servo, this will set the speed of the servo (with ``0`` being full-speed in one direction, ``180`` being full speed in the other, and a value near ``90`` being no movement).
     * @param name pin to write to, eg: AnalogPin.P0
     * @param value angle or rotation speed, eg:180,90,0
     */
    //% help=pins/servo-write-pin weight=20
    //% blockId=device_set_servo_pin block="servo write|pin %name|to %value" blockGap=8
    //% parts=microservo trackArgs=0 shim=pins::servoWritePin
    function servoWritePin(name: AnalogPin, value: number): void;

    /**
     * Configures this IO pin as an analog/pwm output, configures the period to be 20 ms, and sets the pulse width, based on the value it is given **microseconds** or `1/1000` milliseconds.
     * @param name pin name
     * @param micros pulse duration in micro seconds, eg:1500
     */
    //% help=pins/servo-set-pulse weight=19
    //% blockId=device_set_servo_pulse block="servo set pulse|pin %value|to (µs) %micros" shim=pins::servoSetPulse
    function servoSetPulse(name: AnalogPin, micros: number): void;

    /**
     * Sets the pin used when using `analog pitch` or music.
     * @param name pin to modulate pitch from
     */
    //% blockId=device_analog_set_pitch_pin block="analog set pitch pin %name"
    //% help=pins/analog-set-pitch weight=3 advanced=true shim=pins::analogSetPitchPin
    function analogSetPitchPin(name: AnalogPin): void;

    /**
     * Emits a Pulse-width modulation (PWM) signal to the current pitch pin. Use `analog set pitch pin` to define the pitch pin.
     * @param frequency frequency to modulate in Hz.
     * @param ms duration of the pitch in milli seconds.
     */
    //% blockId=device_analog_pitch block="analog pitch %frequency|for (ms) %ms"
    //% help=pins/analog-pitch weight=4 async advanced=true blockGap=8 shim=pins::analogPitch
    function analogPitch(frequency: number, ms: number): void;

    /**
     * Configures the pull of this pin.
     * @param name pin to set the pull mode on, eg: DigitalPin.P0
     * @param pull one of the mbed pull configurations, eg: PinPullMode.PullUp
     */
    //% help=pins/set-pull weight=3 advanced=true
    //% blockId=device_set_pull block="set pull|pin %pin|to %pull" shim=pins::setPull
    function setPull(name: DigitalPin, pull: PinPullMode): void;

    /**
     * Create a new zero-initialized buffer.
     * @param size number of bytes in the buffer
     */
    //% shim=pins::createBuffer
    function createBuffer(size: number): Buffer;

    /**
     * Read `size` bytes from a 7-bit I2C `address`.
     */
    //% repeat.defl=0 shim=pins::i2cReadBuffer
    function i2cReadBuffer(address: number, size: number, repeat?: boolean): Buffer;

    /**
     * Write bytes to a 7-bit I2C `address`.
     */
    //% repeat.defl=0 shim=pins::i2cWriteBuffer
    function i2cWriteBuffer(address: number, buf: Buffer, repeat?: boolean): void;

    /**
     * Write to the SPI slave and return the response
     * @param value Data to be sent to the SPI slave
     */
    //% help=pins/spi-write weight=5 advanced=true
    //% blockId=spi_write block="spi write %value" shim=pins::spiWrite
    function spiWrite(value: number): number;
}



    //% weight=2 color=30 icon="\uf287"
    //% advanced=true
declare namespace serial {

    /**
     * Reads a line of text from the serial port and returns the buffer when the delimiter is met.
     * @param delimiter text delimiter that separates each text chunk
     */
    //% help=serial/read-until
    //% blockId=serial_read_until block="serial|read until %delimiter=serial_delimiter_conv"
    //% weight=19 shim=serial::readUntil
    function readUntil(delimiter: string): string;

    /**
     * Reads the buffered received data as a string
     */
    //% blockId=serial_read_buffer block="serial|read string"
    //% weight=18 shim=serial::readString
    function readString(): string;

    /**
     * Registers an event to be fired when one of the delimiter is matched.
     * @param delimiters the characters to match received characters against.
     */
    //% help=serial/on-data-received
    //% weight=18 blockId=serial_on_data_received block="serial|on data received %delimiters=serial_delimiter_conv" shim=serial::onDataReceived
    function onDataReceived(delimiters: string, body: () => void): void;

    /**
     * Sends a piece of text through Serial connection.
     */
    //% help=serial/write-string
    //% weight=87
    //% blockId=serial_writestring block="serial|write string %text" shim=serial::writeString
    function writeString(text: string): void;

    /**
     * Dynamically configuring the serial instance to use pins other than USBTX and USBRX.
     * @param tx the new transmission pins, eg: SerialPin.P0
     * @param rx the new reception pin, eg: SerialPin.P1
     * @param rate the new baud rate. eg: 115200
     */
    //% weight=10
    //% help=serial/redirect-to
    //% blockId=serial_redirect block="serial|redirect to|TX %tx|RX %rx|at baud rate %rate"
    //% blockExternalInputs=1 shim=serial::redirect
    function redirect(tx: SerialPin, rx: SerialPin, rate: BaudRate): void;
}



    //% indexerGet=BufferMethods::getByte indexerSet=BufferMethods::setByte
declare interface Buffer {
    /**
     * Write a number in specified format in the buffer.
     */
    //% shim=BufferMethods::setNumber
    setNumber(format: NumberFormat, offset: number, value: number): void;

    /**
     * Read a number in specified format from the buffer.
     */
    //% shim=BufferMethods::getNumber
    getNumber(format: NumberFormat, offset: number): number;

    /** Returns the length of a Buffer object. */
    //% property shim=BufferMethods::length
    length: number;

    /**
     * Fill (a fragment) of the buffer with given value.
     */
    //% offset.defl=0 length.defl=-1 shim=BufferMethods::fill
    fill(value: number, offset?: number, length?: number): void;

    /**
     * Return a copy of a fragment of a buffer.
     */
    //% offset.defl=0 length.defl=-1 shim=BufferMethods::slice
    slice(offset?: number, length?: number): Buffer;

    /**
     * Shift buffer left in place, with zero padding.
     * @param offset number of bytes to shift; use negative value to shift right
     * @param start start offset in buffer. Default is 0.
     * @param length number of elements in buffer. If negative, length is set as the buffer length minus start. eg: -1
     */
    //% start.defl=0 length.defl=-1 shim=BufferMethods::shift
    shift(offset: number, start?: number, length?: number): void;

    /**
     * Rotate buffer left in place.
     * @param offset number of bytes to shift; use negative value to shift right
     * @param start start offset in buffer. Default is 0.
     * @param length number of elements in buffer. If negative, length is set as the buffer length minus start. eg: -1
     */
    //% start.defl=0 length.defl=-1 shim=BufferMethods::rotate
    rotate(offset: number, start?: number, length?: number): void;

    /**
     * Write contents of `src` at `dstOffset` in current buffer.
     */
    //% shim=BufferMethods::write
    write(dstOffset: number, src: Buffer): void;
}

// Auto-generated. Do not edit. Really.
