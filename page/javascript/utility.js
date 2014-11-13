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
            imageDatas = result;
            dirIndexList = result.dirIndex;

            setImageBox(null, null);

            // start play photo!
            startPhotoShow(null, (timeList[index] || appConfig.show_interval) + appConfig.fade_time);
        }
    });
}
function setImageBox(folderName, index, fadeTime) {

    if(folderName == null) {

        // get a random folder
        var maxIndex = dirIndexList.length - 1;

        folderName = dirIndexList[rand_int(maxIndex)];
    }

    var folderList = imageDatas[folderName].list;
    if(index == null) {
        index = rand_int(folderList.length -1);

        if(index < 0) {
            return;
        }
    }

    // set image box

    // use Jquery.fadeOut
    imageBox.fadeOut(fadeTime || appConfig.fade_time,null, function() {
        var imgName = folderList[index] || "";

        imageBox[0].src = appConfig.imagesFolderPrefix + imgName;

        imgName = imgName.match(/[^\/]+(?=\.)/g) || [];
        imgTitle.html(imgName[0] || "");

        // fadeIn
        imageBox.fadeIn(fadeTime || appConfig.fade_time);
    })

}