/**
 * Created by Bishaka on 23/03/2017.
 */

var getDataUri = function (url, callback) {
    var image = new Image();

    image.onload = function () {
        var canvas = document.createElement('canvas');
        canvas.width = this.naturalWidth; // or 'width' if you want a special/scaled size
        canvas.height = this.naturalHeight; // or 'height' if you want a special/scaled size

        canvas.getContext('2d').drawImage(this, 0, 0);

        // Get raw image data
        callback(canvas.toDataURL('image/png').replace(/^data:image\/(png|jpg);base64,/, ''));

        // ... or get as Data URI
        callback(canvas.toDataURL('image/png'));
    };

    image.src = url;
};

var alignPanel = function(){
    var h = $(window).height()*.5 - $("#panel").height();
    var w = $(window).width()*.5 - $("#panel").width()*.5;
    $("#panel").css({"left":w,"top":h,"display":"block"});

};

var registerListeners = function(){
    $(window).on("resize",function(){
        alignPanel();
    });
    $("#download").on("click",function(){
        var url = $("#search-input").val();
        var link = '<a id="img-link" href="'+url+'" download>';
        $("body").append(link);
        $("#img-link")[0].click();
        $("#img-link").remove();
    });
};

$(document).ready(function(){
    console.log("We are ready!");
    alignPanel();
    registerListeners();
});