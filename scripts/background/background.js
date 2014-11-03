/**
 * @author shadow
 * @filename
 */

// create application window use html page.

chrome.app.runtime.onLaunched.addListener(
    function() {

        for(var index = 0; index < 7; index++) {
            // create a window

            appWin = chrome.app.window.create("page/window.html",
                {
                    "frame": "none",
                    "bounds": {
                        "width": 800,
                        "height": 400
                    }
                });
        }
    });