myitem = document.getElementById("firsttest");

myitem.addEventListener("click", onClick);
//Creates a response for when you click on where the code is being used
function onClick() {  
    myitem.style.color = "purple";  
    myitem.style.fontSize = "20px"
//Changes the color and size, once you click where the code is implemented 
}

myitem.addEventListener("mouseout", onmousemove);

function onmousemove() {  
        myitem.style.color = "black";  
        myitem.style.fontSize = "1em"
//Once you move the mouse of the designated area it will result back to its origin
}

thebutton = document.getElementById("thebutton");  
otheritem = document.getElementById("buttontest");
//Shows a button element
thebutton.addEventListener("click", onButtonClick);
//Allows me to click on it
function onButtonClick() {  
    otheritem.style.color = "teal";  
//Once I click on the button element, the text I chose will change colors
}

textentry = document.getElementById("myinput");  
textentry.addEventListener("change", onChange);

function onChange() {  
    newtext = myinput.value;  
    otheritem.innerHTML = newtext;  
}