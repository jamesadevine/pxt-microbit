/// <reference path="../node_modules/pxt-core/typings/bluebird/bluebird.d.ts"/>
/// <reference path="../node_modules/pxt-core/built/pxtparts.d.ts"/>
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="../libs/microbit/dal.d.ts"/>
/// <reference path="./visuals/neopixel.ts"/>

namespace pxsim {
    export const MICROBIT_DEF: BoardDefinition = {
        visual: "microbit",
        gpioPinBlocks: [
            ["P0"], ["P1"], ["P2"],
            ["P3"],
            ["P4", "P5", "P6", "P7"],
            ["P8", "P9", "P10", "P11", "P12"],
            ["P16"],
        ],
        gpioPinMap: {
            "P0": "P0",
            "P1": "P1",
            "P2": "P2",
            "P3": "P3",
            "P4": "P4",
            "P5": "P5",
            "P6": "P6",
            "P7": "P7",
            "P8": "P8",
            "P9": "P9",
            "P10": "P10",
            "P11": "P11",
            "P12": "P12",
            "P13": "P13",
            "P14": "P14",
            "P15": "P15",
            "P16": "P16",
            "P19": "P19",
            "P20": "P20",
        },
        spiPins: {
            MOSI: "P15",
            MISO: "P14",
            SCK: "P13",
        },
        i2cPins: {
            SDA: "P20",
            SCL: "P19",
        },
        analogInPins: ["P0", "P1", "P2", "P3", "P10"],
        groundPins: ["GND"],
        threeVoltPins: ["+3v3"],
        attachPowerOnRight: true,
        onboardComponents: ["buttonpair", "ledmatrix", "speaker"],
        useCrocClips: true,
        marginWhenBreadboarding: [0, 0, 80, 0],
    }

    export const builtinComponentSimVisual: Map<() => visuals.IBoardComponent<any>> = {
        "buttonpair": () => new visuals.ButtonPairView(),
        "ledmatrix": () => new visuals.LedMatrixView(),
        "neopixel": () => new visuals.NeoPixelView(),
    };
    export const builtinComponentSimState: Map<(d: DalBoard) => any> = {
        "buttonpair": (d: DalBoard) => d.buttonPairState,
        "ledmatrix": (d: DalBoard) => d.ledMatrixState,
        "edgeconnector": (d: DalBoard) => d.edgeConnectorState,
        "serial": (d: DalBoard) => d.serialState,
        "radio": (d: DalBoard) => d.radioState,
        "thermometer": (d: DalBoard) => d.thermometerState,
        "accelerometer": (d: DalBoard) => d.accelerometerState,
        "compass": (d: DalBoard) => d.compassState,
        "lightsensor": (d: DalBoard) => d.lightSensorState,
        "neopixel": (d: DalBoard) => d.neopixelState,
    };
    export const builtinComponentPartVisual: Map<(xy: visuals.Coord) => visuals.SVGElAndSize> = {
        "buttonpair": (xy: visuals.Coord) => visuals.mkBtnSvg(xy),
        "ledmatrix": (xy: visuals.Coord) => visuals.mkLedMatrixSvg(xy, 8, 8),
        "neopixel": (xy: visuals.Coord) => visuals.mkNeoPixelPart(xy),
    };


    export const RASPBERRYPI_MODELB: BoardDefinition = {
        visual: {
            image: "/parts/raspberrypi-model-b.svg",
            outlineImage: "/parts/raspberrypi-model-b-outline.svg",
            width: 331,
            height: 230,
            pinDist: 9,
            pinBlocks: [
                { x: 5, y: 31, labelPosition: "above", labels: ["3V3", "SDA", "SCL", "#4", "--", "#17", "#21", "#22", "--", "MOSI", "MISO", "SCLK", "--"]},
                { x: 5, y: 39, labelPosition: "below", labels: ["5V", "--", "GND", "TXD", "RXD", "#18", "--", "#23", "#24", "--", "#25", "CS0", "CS1"]}
            ],
        },
        gpioPinBlocks: [
            ["SDA", "SCL", "#4"],
            ["#17", "#21", "#22"],
            ["MOSI", "MISO", "SCLK"],
            ["TXD", "RXD", "#18"],
            ["#23", "#24"],
            ["#25", "CS0", "CS1"],
        ],
        gpioPinMap: {
            "P0": "SDA",
            "P1": "SCL",
            "P2": "#4",
            "P3": "MOSI",
            "P4": "MISO",
            "P5": "SCLK",
            "P6": "TXD",
            "P7": "RXD",
            "P8": "#18",
            "P9": "#23",
            "P10": "#24",
            "P11": "#25",
            "P12": "CS0",
            "P13": "CS1",
        },
        groundPins: ["GND"],
        threeVoltPins: ["3V3"],
        marginWhenBreadboarding: [20, 0, 40, 0],
    }
    export const SPARKFUN_PHOTON: BoardDefinition = {
        visual: {
            image: "/parts/sparkfun-photon.svg",
            outlineImage: "/parts/sparkfun-photon-outline.svg",
            width: 264.4,
            height: 202.4,
            pinDist: 9.5,
            pinBlocks: [
                {x: 72, y: 6, labelPosition: "below", labels: ["~SCL/D1", "~SDA/D0", " ", "GND0", "SCK/A3", "~MISO/A4", "~MOSI/A5", "SS/A2", "~WKP", "DAC"]},
                {x: 174, y: 6, labelPosition: "below", labels: ["D7", "D6", "D5", "D4", "~D3", "~D2", "~TX", "~RX"]},
                {x: 107, y: 188, labelPosition: "above", labels: [" ", " ", "RESET", "3.3V", "V-USB", "GND1", "GND2", "VIN"]},
                {x: 193, y: 188, labelPosition: "above", labels: ["A0", "A1", "A2", "A3", "A4", "A5"]},
            ],
        },
        gpioPinBlocks: [
            ["~SCL/D1", "~SDA/D0", "SCK/A3", "~MISO/A4", "~MOSI/A5", "SS/A2"],
            ["D7", "D6", "D5", "D4", "~D3", "~D2", "~TX", "~RX"],
            ["A0", "A1", "A2", "A3", "A4", "A5"],
        ],
        gpioPinMap: {
            "P0": "A0",
            "P1": "A1",
            "P2": "A2",
            "P3": "A3",
            "P4": "A4",
            "P5": "A5",
            "P6": "~SDA/D0",
            "P7": "~SCL/D1",
            "P8": "~D2",
            "P9": "~D3",
            "P10": "D4",
            "P11": "D5",
            "P12": "D6",
            "P13": "D7",
            "P14": "SS/A2",
            "P15": "SCK/A3",
            "P16": "~MISO/A4",
            "P19": "~MOSI/A5",
        },
        groundPins: ["GND0", "GND1", "GND2"],
        threeVoltPins: ["3.3V"],
        marginWhenBreadboarding: [20, 0, 40, 0],
    }
    export const ARDUINO_ZERO: BoardDefinition = {
        visual: {
            image: "/parts/arduino-zero.png",
            outlineImage: "/parts/arduino-zero-outline.svg",
            width: 1000,
            height: 762,
            pinDist: 35.5,
            pinBlocks: [
                {x: 276.8, y: 17.8, labelPosition: "below", labels: ["SCL", "SDA", "AREF", "GND0", "~13", "~12", "~11", "~10", "~9", "~8"]},
                {x: 655.5, y: 17.8, labelPosition: "below", labels: ["7", "~6", "~5", "~4", "~3", "2", "TX->1", "RX<-0"]},
                {x: 411.7, y: 704.6, labelPosition: "above", labels: ["ATN", "IOREF", "RESET", "3.3V", "5V", "GND1", "GND2", "VIN"]},
                {x: 732.9, y: 704.6, labelPosition: "above", labels: ["A0", "A1", "A2", "A3", "A4", "A5"]},
            ],
        },
        gpioPinBlocks: [
            ["A0", "A1", "A2", "A3", "A4", "A5"],
            ["~13", "~12", "~11", "~10", "~9", "~8"],
            ["7", "~6", "~5", "~4", "~3", "2", "TX->1", "RX<-0"],
        ],
        gpioPinMap: {
            "P0": "A0",
            "P1": "A1",
            "P2": "A2",
            "P3": "A3",
            "P4": "A4",
            "P5": "A5",
            "P6": "RX<-0",
            "P7": "TX->1",
            "P8": "2",
            "P9": "~3",
            "P10": "~4",
            "P11": "~5",
            "P12": "~6",
            "P13": "7",
            "P14": "~8",
            "P15": "~9",
            "P16": "~10",
            "P19": "~11",
            "P20": "~12",
        },
        spiPins: {
            MOSI: "~9", //TODO: confirm correct pins
            MISO: "~8",
            SCK: "~10",
        },
        //TODO: add SPI pins to Arduino board
        // i2cPins: {
        //     SDA: "P20",
        //     SCL: "P19",
        // },
        analogInPins: ["A0", "A1", "A2", "A3", "A4", "A5"],
        groundPins: ["GND0", "GND1", "GND2"],
        threeVoltPins: ["3.3V"],
        marginWhenBreadboarding: [20, 0, 40, 0],
    }


    //TODO: add multiple board support
    // export const CURRENT_BOARD = ARDUINO_ZERO;
    export const CURRENT_BOARD = MICROBIT_DEF;
}