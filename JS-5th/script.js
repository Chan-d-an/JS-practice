var rect = document.querySelector("#center");
rect.addEventListener("mousemove", function(details){
    var rectanglelocation  = rect.getBoundingClientRect();
    var insiderrectval = details.clientX - rectanglelocation.left;

    if (insiderrectval < rectanglelocation.width/2){
        
    }
    else{
        
    }
}

)