var Camera = {

    initCamera: function () {

        var constraints = { audio: true, video: { width: 100, height: 140 } };

        navigator.mediaDevices.getUserMedia(constraints)
            .then(function(mediaStream) {
                var video = document.getElementById('monitor');
                video.srcObject = mediaStream;
                video.onloadedmetadata = function(e) {
                    video.play();
                };
            })
            .catch(function(err) { alert('摄像头出错'); });

    },

    capature: function String() {
        var video = document.getElementById('monitor');
        var canvas = document.getElementById('photo');
        canvas.width = 100;
        canvas.height = 140;
        canvas.getContext('2d').drawImage(video, 0, 0,canvas.width,canvas.height);
        var base64Data = canvas.toDataURL('image/png', 1.0);
        document.getElementById('idcardphoto').src =base64Data;
        return base64Data;
    }
};


