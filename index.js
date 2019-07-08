
    
    document.getElementById('speak').onclick = 
    function txtMsg() {
        let txtMsg = new 
        SpeechSynthesisUtterance(document.getElementById("text").value);
        window.speechSynthesis.speak(txtMsg);

    }
    
     //     window.speechSynthesis.speak(talk);
     // }
 
