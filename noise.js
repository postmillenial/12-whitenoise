

//create image data object
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.fillRect(0,0,window.innerWidth,window.innerHeight);

window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawStuff();
}

function drawStuff(){

    ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;

    for (var i = 0; i < data.length; i += 4){
        random_color = function(){ return Math.floor( Math.random()*256 );};

        data[i] =   random_color();
        data[i+1] = random_color();
        data[i+2] = random_color();
    }
    ctx.putImageData(imageData, 0, 0);
}

