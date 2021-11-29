var camera = document.getElementById("Webcam_holder");
Webcam.set({ 
    width: 350, 
    height: 200, 
    image_format: "jpeg", 
    jpeg_quality: 90 
});
Webcam.attach('#camera');
function capture() {
    Webcam.snap(function (data_uri) 
    { document.getElementById("result").innerHTML = '<img id = "captured_image" src = " ' + data_uri + ' ">';
});
}
console.log('ml5 version:',ml5.version);
clasiifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/hr6ePBMGl/model.json', modelLoaded);

function modelLoaded(){
    console.log("Model Loaded");
}