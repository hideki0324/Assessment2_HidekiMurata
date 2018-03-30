
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
    mouth = document.getElementById("mouth");

function randomFace(){
    hair.src = "img/hair"+rando+".png";
    eyes.src = "img/eyes"+rando+".png";
    nose.src = "img/nose"+rando+".png";
    mouth.src = "img/mouth"+rando+".png";
}

hair.addEventListener("click", function(){
    hairchange += 1;
    hair.src = "img/hair"+hairchange+".png";
    if(hairchange >=3){
        hairchange = 0;
    }
});

eyes.addEventListener("click", function(){
    hairchange += 1;
    eyes.src = "img/eyes"+hairchange+".png";
    if(hairchange >=3){
        hairchange = 0;
    }
});

nose.addEventListener("click", function(){
    hairchange += 1;
    nose.src = "img/nose"+hairchange+".png";
    if(hairchange >=3){
        hairchange = 0;
    }
});

mouth.addEventListener("click", function(){
    hairchange += 1;
    mouth.src = "img/mouth"+hairchange+".png";
    if(hairchange >=3){
        hairchange = 0;
    }
});




