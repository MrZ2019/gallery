/**
 * @author shadow
 * @filename
 */
var _win = chrome.app.window.current();

$(document).ready(function() {

    // set content #main
    //$("#main > p").html("Page loaded!!!").hide().fadeIn();
    imageBox = $("#image-box");
    imgTitle =  $("#img-title")


    imageBox.on("error",function() {
        setImageBox(null, null, 0.1);
        $(this).hide();
    });

    imageBox.on("load", function() {
        $(this).show();
    })
    var initIndex;
    if(appConfig.initialMode == "fix") {
        initIndex = appConfig.defaultImageIndex;
    }
    else {
        initIndex = rand_int(appConfig.randIndex.length -1 )
        initIndex = appConfig.randIndex[initIndex];
    }
    fnReadImageData(initIndex);
    var bound;
    if(appConfig.singleMode) {
        bound = posList['single'];
    }
    else {
        bound = posList[initIndex.toString()];
    }
    _win.setBounds(bound);
    window.addEventListener("keydown", function(event) {

        var keyCode = event.keyCode,

            plusCode = 107,
            minusCode = 109;
        if(event.ctrlKey) {
            fnReadImageData();
            return;
        }
        
        if(event.keyCode == 32) {
            
            if(appStatus.galleryIsRunning) {
                stopShow();
                $('body').addClass('pause');
            }
            else {
                startPhotoShow(null,appConfig.show_interval);
                setImageBox(null, null);
                $('body').removeClass('pause');
            }
            return;
        }

       
        if(keyCode == plusCode) {
            appConfig.show_interval += appConfig.interval_unit;
        }
        else if(keyCode == minusCode){
            appConfig.show_interval -= appConfig.interval_unit;
        }

        if(appConfig.show_interval < appConfig.min_interval) {
            appConfig.show_interval = appConfig.min_interval;
        }

        // start play photo!
        startPhotoShow(null, appConfig.show_interval);

//        // check application status
//
//        if(appStatus.galleryIsRunning == true) {
//            stopShow();
//        }
//        else {
//            startPhotoShow(null, appConfig.show_interval);
//        }

        if(event.altKey == true) {
            if(event.shiftKey) {
                var allWin = chrome.app.window.getAll();

                allWin.forEach(function(win) {
                    if(win == _win) {
                        return;
                    }
                    if(! win.prevBounds) {
                        win.prevBounds = win.getBounds();
                        win.setBounds(
                            {
                                width: 5,
                                height: 5
                            });
                    }
                    else {
                        win.setBounds(win.prevBounds);
                        win.prevBounds = null;
                    }
                });
            }
            else if(keyCode == 65) {
                if(_win.singlePrevBounds) {
                    _win.setBounds(_win.singlePrevBounds);
                    _win.singlePrevBounds = null;
                }
                else {
                    _win.singlePrevBounds = _win.getBounds();
                    _win.setBounds(
                        {
                            width: 5,
                            height: 5
                        });
                }
            }
            else if(keyCode == 112) {
                _win.setBounds(posList[_win.dataIndex]);
            }
        }


    }, true)

    window.addEventListener("keypress", function(e) {

         // change image json!
        
        var keyCode = e.keyCode;
        var charCode = String.fromCharCode(keyCode);
        
        if(charCode == ' ') {
            return;
        }
        fnReadImageData(charCode);
    });
});

/** startPhotoShow */

function startPhotoShow(folderName, interval) {

    if(window.showHandle) {
        clearInterval(showHandle);
        showHandle = null;
    }

    showHandle = setInterval(_inner_runner, interval);

    appStatus.galleryIsRunning = true;

    function _inner_runner() {

        // set image box use parameter
        setImageBox(folderName, null);
    }
}

/** stopShow */

function stopShow() {

    clearInterval(showHandle);
    showHanlder = null;

    // set application status
    appStatus.galleryIsRunning = false;
}