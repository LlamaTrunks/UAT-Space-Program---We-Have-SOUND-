
//start button
function start() {
    //disables start button on click event and enables stop
    document.getElementById("startButton").disabled = true;
     //disables start button on click event and enables stop
    document.getElementById("stopButton").disabled = false;
    //let user know that data is being processed
    
    
}

function stop() {
  
    //ensures start button is enabled on click event
    document.getElementById("startButton").disabled = false;
    //disables stop button on click event
    document.getElementById("stopButton").disabled = true;
    
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function() {
        this.sound.play();
    }
    // this.stop = function() {
    //     this.sound.pause();
    // }
}
