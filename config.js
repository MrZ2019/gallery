/**
 * @author shadow
 * @filename
 */

var appConfig = {
    "imagesFolderPrefix": "../resource/images/",

    "show_interval": 10000,
    "min_interval": 200,
    "fade_time": 0,
    "interval_unit": 500,

    "totalFiles": 3,
    "resourceDir": "../resource/",
    "defaultImageIndex": 4,
    "windowCount": 5,
    "randIndex": ["a", "b"],
    singleMode: true,
    randMode: false
};
var hScreen = window.screen.height;
var wScreen = window.screen.width;

/* v2 -------- */
var posList =
{
    'single': {
        left: 0,
        top: 325,
        width: 200,
        height: 200
    },
    "a": {
        left: 0,
        top: 5,
        width: 140,
        height: 140
    },
    "b": {
        left: 300,
        top: 5,
        width: 140,
        height: 140
    },
    "4": {
        left: 450,
        top: 5,
        width: 140,
        height: 140
    },
    "5": {
        left: 600,
        top: 5,
        width: 140,
        height: 140
    },
    "a": {
        left: 750,
        top: 5,
        width: 140,
        height: 140
    },
    "6": {
        left: 900,
        top: 5,
        width: 140,
        height: 140
    },
    "7": {
        left: 900,
        top: 5,
        width: 140,
        height: 140
    },
    "8": {
        left: 1050,
        top: 5,
        width: 140,
        height: 140
    },
    "9": {
        left: 1200,
        top: 5,
        width: 140,
        height: 140
    },
    "0": {
        left: 0,
        top: 5,
        width: 140,
        height: 140
    }
};

var timeList =
{
    "0": 4000,
    "1": 6000
};
/*
var posList =
{
    "a": {
        width: 320,
        height: 200,
        left: 0,
        top: 0
    },
    "1":
    {
        width: 260,
        height: 320,
        left: 0,
        top: 220
    },
    4:
    {
        width: 200,
        height: 200,
        left: wScreen - 200,
        top: 360
    },
    "5":
    {
        width: 320,
        height: 240,
        left: 330,
        top: 0
    },
    "6":
    {
        width: 320,
        height: 240,
        left: 660,
        top: 0
    },
    "7":
    {
        width: 320,
        height: 240,
        left: 1000,
        top: 0
    },
    8:
    {
        width: 320,
        height: 240,
        left: 330,
        top: 0
    },
    9:
    {
        width: 300,
        height: 350,
        left: wScreen - 300,
        top: 0
    },
    0: {
        width: 200,
        height: 200,
        top: 600,
        left: wScreen - 200
    }
}*/
