var idx = Math.floor((new Date().getHours()));
var body = document.getElementsByTagName("body")[0];
body.className = "heaven-" + idx;

var tel = 0;
var mWidth = window.innerWidth;
var mHeight = window.innerHeight;

// geting canvas by Boujjou Achraf
        var c = document.getElementById("c");
        var ctx = c.getContext("2d");
        
        c.height = window.innerHeight;
        c.width = window.innerWidth;
        
        var font_size = 10;
        var columns = c.width/font_size; //number of columns for the rain
        //an array of drops - one per column
        var drops = [];
        //x below is the x coordinate
        //1 = y co-ordinate of the drop(same for every drop initially)
        for(var x = 0; x < columns; x++)
            drops[x] = 1; 
        
        
        //chinese characters - taken from the unicode charset
            var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
            //converting the string into an array of single characters
            matrix = matrix.split("");
        
        window.onresize = function test(){
            
            ctx.clearRect(0,0, c.width, c.height);
            
            
            c.height = window.innerHeight;
            c.width = window.innerWidth;
            
            columns = c.width/font_size;
            
             for(var x = 0; x < columns; x++)
            drops[x] = 1;
        }
        

        //making the canvas full screen
        
        //drawing the characters
        function draw()
        {
            //Black BG for the canvas
            //translucent BG to show trail
            ctx.fillStyle = "rgba(15, 20, 15, 0.04)";
            ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
            ctx.fillStyle = "#00ff00";//green text
            ctx.font = font_size + "px arial";
            //looping over drops
            for(var i = 0; i < drops.length; i++)
            {
                //a random chinese character to print
                var text = matrix[Math.floor(Math.random()*matrix.length)];
                //x = i*font_size, y = value of drops[i]*font_size
                ctx.fillText(text, i*font_size, drops[i]*font_size);

                //sending the drop back to the top randomly after it has crossed the screen
                //adding a randomness to the reset to make the drops scattered on the Y axis
                if(drops[i]*font_size > window.innerHeight && Math.random() > 0.975)
                    drops[i] = 0;

                //incrementing Y coordinate
                drops[i]++;
            }
        }

        setInterval(draw, 35);

document.getElementById("navbar").style.display = "none";

//hide navbar
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  // 20 is an arbitrary number here, just to make you think if you need the prevScrollpos variable:
  if (currentScrollPos > 20) {
    // I am using 'display' instead of 'top':
    document.getElementById("navbar").style.display = "initial";
  } else {
    document.getElementById("navbar").style.display = "none";
  }
}
