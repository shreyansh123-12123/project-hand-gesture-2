prediction_1 = ""
prediction_2 = ""

Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

camera = document.getElementById("camera");

Webcam.attach('#camera');

      
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:',ml5.version); 
classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/xL9cuE_mi/model.json',modelLoaded);
function modelLoaded(){
    console.log('mission succesful boisss!!!!!');
}
function speak(){
    var synth= window.speechSynthesis;
    speak_data_1= "the first prediction is "+prediction_1;
    speak_data_2= "the second prediction is "+prediction_2;
    var utterThis= new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}

function check(){
img= document.getElementById('captured_image');
classifier.classify(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML=results[0].label;
        document.getElementById("result_gesture_name2").innerHTML=results[1].label;
        prediction_1=results[0].label;
        prediction_2=results[1].label;
        speak();
        if(results[0].label=="victory"){
            document.getElementById("update_gesture").innerHTML="&#9996;";

        }
        if(results[0].label=="rock"){
            document.getElementById("update_gesture").innerHTML="&#129304";
            
        }
        if(results[0].label=="thumbs up"){
            document.getElementById("uptade_gesture").innerHTML=" &#128077;";
            
        }
        if(results[0].label=="showing slap"){
            document.getElementById("update_gesture").innerHTML="&#128075;";

        }
        if(results[0].label=="bye"){
            document.getElementById("update_gesture").innerHTML="&#128400;";
            
        }
        if(results[0].label=="clap"){
            document.getElementById("update_gesture").innerHTML="&#128079;";
            
        }
        if(results[0].label=="wa_bhai_wa"){
            document.getElementById("update_gesture").innerHTML="&#128076;";
            
        }
        if(results[0].label=="punch"){
            document.getElementById("update_gesture").innerHTML="&#9994;";
            
        }
        if(results[0].label=="up"){
            document.getElementById("update_gesture").innerHTML="&#128070;";
            
        }
        if(results[1].label=="victory"){
            document.getElementById("update_gesture2").innerHTML="&#9996;";

        }
        if(results[1].label=="rock"){
            document.getElementById("update_gesture2").innerHTML="&#129304";
            
        }
        if(results[1].label=="thumbs up"){
            document.getElementById("uptade_gesture2").innerHTML=" &#128077;";
            
        }
        if(results[1].label=="showing slap"){
            document.getElementById("update_gesture2").innerHTML="&#128075;";

        }
        if(results[1].label=="bye"){
            document.getElementById("update_gesture2").innerHTML="&#128400;";
            
        }
        if(results[1].label=="clap"){
            document.getElementById("update_gesture2").innerHTML="&#128079;";
            
        }
        if(results[1].label=="wa_bhai_wa"){
            document.getElementById("update_gesture2").innerHTML="&#128076;";
            
        }
        if(results[1].label=="punch"){
            document.getElementById("update_gesture2").innerHTML="&#9994;";
            
        }
        if(results[1].label=="up"){
            document.getElementById("update_gesture2").innerHTML="&#128070;";
            
        }

        

    }
    
}