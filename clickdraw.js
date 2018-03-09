/*
 * Team yeyu
 * Jen Yu and Helen Ye
 * SoftDev Period 7
 * 03-07-2018
 * K#10: Objectification
 */

var svg = document.getElementById("slate");
var width = svg.getAttribute("width");
var height = svg.getAttribute("height");

var clear = document.getElementById("clear");

console.log(clear);

//clears the screen
var clearCallBack = function(e){
    while(svg.firstChild){
	svg.removeChild(svg.firstChild);
    }
}

//creates a circle object w builtin fxns
var drawDot = function(x, y, r, fill){
    var c = {
        cx: x,
        cy: y,
        cr: r,
        cfill: fill,
        circle: document.createElementNS("http://www.w3.org/2000/svg", "circle"),
        append: function(){
            svg.appendChild(this.circle);
        },
        changeColor: function(e){
            if(this.getAttribute("fill") == "red"){
                this.setAttribute("fill", "blue");
            }
            else{
                console.log("delete");
                svg.removeChild(this);
                rX = Math.random() * (width - 10);
                rY = Math.random() * (height - 10);
                svg.appendChild(drawDot(rX, rY, 20, "red").circle);
            }
            e.stopPropagation();
        }
    }
    c.circle.setAttribute("cx", c.cx);
    c.circle.setAttribute("cy", c.cy);
    c.circle.setAttribute("r", c.cr);
    c.circle.setAttribute("fill", c.cfill);
    c.circle.setAttribute("stroke", "black");
    c.circle.addEventListener("click", c.changeColor);
    return c;
}

//when clicked
var circle = function(e){
    var c = drawDot(e.offsetX, e.offsetY, 20, "red");
    c.append();
    e.stopPropagation();
}

//add the event listeners
svg.addEventListener("click", circle);
clear.addEventListener("click", clearCallBack);

