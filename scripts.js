function drawTree(height) { 

    for(var i = 1; i < 6; i++){
        var star = '';  

        for(var j = 0; j < i; j++){
        star += '*';
        } 

        if (i === height + 1) {
            break; 
        }

        console.log(star); 
    }
}

drawTree(5);