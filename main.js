//https://teachablemachine.withgoogle.com/models/[...]
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier  = ml5.soundClassifier('https://teachablemachine.withgoogle.com/model.json', modelReady);
}


function modelReady() {
    classifier.classify(gotResultes);
}



function gotResults(error, results) {
    if(error) {
        console.error(error);
    } else {
    console.log(result);
    random_number_r = math.floor(math.ramdom() * 255) + 1;
    random_number_g = math.floor(math.ramdom() * 255) + 1;
    random_number_b = math.floor(math.ramdom() * 255) + 1;



    document.getElementById("result_label").innerHTML = 'I can here - '+  results[0].label;
    document.getElementById("result_confidence").innerHTML = 'accuracy - '+(results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";
    
    img = document.getElementById("downlode.jpeg");
    img1 = document.getElementById("downlode(1).jpg");
    

    if(results[0].label == "cat"){
        img = 'downlode.jpg';
        img1 = 'downlode(1).jpg';
    }
    else if(results[0].label == "dog"){
        img = 'downlode.jpg';
        img1 = 'downlode(1).jpg';
    }
    
}