
// LEVEL 2a

    var x = document.getElementById("color");
    x.addEventListener("change",function(){
    document.getElementById("preview").style.backgroundColor = x.value;
});
    


// LEVEL 2b

document.getElementById("number").addEventListener("click", function(){
    document.getElementById("populateRange1").type = "number";
    document.getElementById("populateRange2").type = "number";
    document.getElementById("populateRange3").type = "number";
    document.getElementById("populateRange4").type = "number";
});


document.getElementById("range").addEventListener("click", function(){
    document.getElementById("populateRange1").type = "range";
    document.getElementById("populateRange2").type = "range";
    document.getElementById("populateRange3").type = "range";
    document.getElementById("populateRange4").type = "range";
});

// LEVEL 2c

var range1 =  document.getElementById("populateRange1");
var range2 =  document.getElementById("populateRange2");
var range3 =  document.getElementById("populateRange3");
var range4 =  document.getElementById("populateRange4");
var hair = document.getElementById("hair");
var eyes = document.getElementById("eyes");
var nose = document.getElementById("nose");
var mouth = document.getElementById("mouth");

range1.addEventListener("change", function(){
    hair.style.width = range1.value+"%";
});

range2.addEventListener("change", function(){
    eyes.style.width = range2.value+"%";
});

range3.addEventListener("change", function(){
    nose.style.width = range3.value+"%";
});

range4.addEventListener("change", function(){
    mouth.style.width = range4.value+"%";
});

//LEVEL 3 - INTERMEDIATE JS IMG SRC WITH NUMBERS & CONDITIONS - /3 - preview.js

var hair = document.getElementById("hair"),
    eyes = document.getElementById("eyes"),
    nose = document.getElementById("nose"),
    mouth = document.getElementById("mouth"),
    num = 0;

hair.addEventListener("click", function(){
    num += 1;
    hair.src = "img/hair"+num+".png";
    if(num >=3){
        num = 0;
    }
})

eyes.addEventListener("click", function(){
    num += 1;
    eyes.src = "img/eyes"+num+".png";
    if(num >=3){
        num = 0;
    }
})

nose.addEventListener("click", function(){
    num += 1;
    nose.src = "img/nose"+num+".png";
    if(num >=3){
        num = 0;
    }
})

mouth.addEventListener("click", function(){
    num += 1;
    mouth.src = "img/mouth"+num+".png";
    if(num >=3){
        num = 0;
    }
})

//LEVEL 4a - CREATING ELEMENTS - /3 - controls.js
var plus = document.getElementById("plus"),
    dispDiv = document.getElementById("display"),
    iw = 100,
    ih = 100;

document.getElementById("plus").addEventListener("click", function(){
    var newDiv = document.createElement("div");
    document.body.appendChild(newDiv);
    newDiv.className = "boxes";
    newDiv.id = "box"+num;
    newDiv.style.width = iw+"px";
    newDiv.style.height = iw+"px";
        
    iw -= 10;
    ih -= 10;
    if(iw ,=0){
        iw = 100;
    }
    if(ih ,=0){
        ih = 100;
    }  
    num++;
});


//LEVEL 4b - RANDOM - /2 - controls.js

function randomFace(){
    var rando = Math.round(Math.random()*2)+1;
    var randohairsize = Math.round(Math.random()*70);
    var randoeyesize = Math.round(Math.random()*40);
    var randonosesize = Math.round(Math.random()*30);
    var randomouthsize = Math.round(Math.random()*35);
    var r = Math.round(Math.random()*255);
    var g = Math.round(Math.random()*255);
    var b = Math.round(Math.random()*255);
    var preview.style.backgroundColor = "rgb("+r+","+g+","+b+")";
}
    
autoRandom.addEventListener("click", function(){
   timer =  setInterval(function(){
		    randomFace();
        createFace();
    },500);
});


//LEVEL 5a - FUNCTIONS FOR LEVEL 4 - /1
//LEVEL 5b - FUNCTION FOR LEVEL 2b - /1

//LEVEL 6 - INTERVAL CREATING - /1 - controls.js




















