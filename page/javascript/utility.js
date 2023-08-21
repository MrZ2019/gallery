/**
 * @author shadow
 * @filename
 */

function fnReadImageData(index) {

    if(index == null) {
        index = rand_int(appConfig.totalFiles - 1);
    }
    var openFile = appConfig.resourceDir + imgDataMap[index];
    _win.dataIndex = index;
    $.getJSON(openFile, null, function(result, status) {

        if(status == "success") {
            // imageDatas = result;
            // dirIndexList = result.dirIndex;
            imageDatas = getListFromJSON(result)

            setImageBox(null, null);

            // start play photo!
            startPhotoShow(null, (timeList[index] || appConfig.show_interval) + appConfig.fade_time);
        }
    });
}

function getListFromJSON(data) {
    var LIST = []
    _callback(data)

    return LIST

    function _callback(obj) {
        if (!obj) {
            return
        }
        var dirList = obj.dirIndex

        for (let index = 0; index < obj.list.length; index++) {
            const file = obj.list[index];

            LIST.push(file)
            
        }
        for (let index = 0; index < dirList.length; index++) {
            const dir = dirList[index];
            var key = dir.match(/([^\/]+)$/)[1]
            _callback(obj[key])
        }
    }
}
var index1 = 0;
function setImageBox(folderName, index, fadeTime) {

    // if(folderName == null) {

    //     // get a random folder
    //     var maxIndex = dirIndexList.length - 1;

    //     folderName = dirIndexList[rand_int(maxIndex)];
    // }

    // var folderList = imageDatas[folderName].list;
    // if(index == null) {

    //     if (appConfig.randMode) {

    //         index = rand_int(folderList.length -1);
    //     } else {
    //         index = index1;
    //         index1++;

    //         if (index1 > folderList.length - 1) {
    //             index1 = 0;
    //         }
    //     }

    //     if(index < 0) {
    //         return;
    //     }
    // }
    index = rand_int(0, imageDatas.length)

    // set image box

    // use Jquery.fadeOut
    imageBox.fadeOut(fadeTime || appConfig.fade_time,null, function() {
        var imgName = imageDatas[index] || "";

        imageBox[0].src = appConfig.imagesFolderPrefix + imgName;

        imgName = imgName.match(/[^\/]+(?=\.)/g) || [];
        imgTitle.html(imgName[0] || "");

        // fadeIn
        imageBox.fadeIn(fadeTime || appConfig.fade_time);
    })

}