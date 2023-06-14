//number of times it has happened
var count=0;
function calculate()
{
    var valuea = document.getElementById("sidea").value;
    var valueh= Math.ceil(valuea*valuea+1);   
    console.log(valueh)
    document.getElementById("squareans").innerHTML = `Hypoteneuse is: √${valueh}`;
}
var sidebar=document.getElementsByClassName('buttons');
var canvas=document.querySelector('canvas');
var button=document.getElementById('clickbtn2');
var hypoo=document.getElementById('clickbtn5')
var protractor=document.getElementById("protractor");
canvas.width=0.6* (window.innerWidth);
canvas.height=0.4* (window.innerWidth);
sidebar.width=0.3* (window.innerWidth);
var x=1;
var y=1;
var b=x;
var c=0;
var d=1;
var theta=0;
var ctx= canvas.getContext('2d');
theta=Math.atan(y/x);
//line
ctx.beginPath();
ctx.moveTo(400,300);
ctx.lineTo(800,300);
ctx.strokeStyle="#000000";
ctx.lineWidth= 1;
ctx.stroke();

ctx.fillStyle="#000000";
ctx.font="20px arial"
ctx.fillText("|",398,305);
ctx.fillText("|",448,305);
ctx.fillText("|",498,305);
ctx.fillText("|",548,305);
ctx.fillText("|",598,305);
ctx.fillText("|",648,305);
ctx.fillText("|",698,305);
ctx.fillText("|",748,305);
ctx.fillText("0",398,330);
ctx.fillText("1",448,330);
ctx.fillText("2",498,330);
ctx.fillText("3",548,330);
ctx.fillText("4",598,330);
ctx.fillText("5",648,330);
ctx.fillText("6",698,330);
ctx.fillText("7",748,330);

for(var i=5;i<=800;i+=5)
{
    ctx.fillStyle="#000000";
    ctx.font="8px arial"
    ctx.fillText("|",399+i,307);
};

button.addEventListener('click',trace);
var rotateangle
var totangle=0
function trace()
{
rotateangle=Math.abs(rotatel)%360
if(rotateangle==totangle || rotateangle==(totangle+1))
{
ctx.beginPath()
//ctx.moveTo(400,300)
ctx.moveTo(400+50*x,300-50*y)
ctx.lineTo(400+50*d,300-50*c)
//something to draw perpendicular first
ctx.moveTo(400+50*x,300-50*y)
ctx.lineTo(400,300)
//ctx.lineTo(400+50*x,300-50*y)
//ctx.lineTo(400+50*d,300-50*c)
ctx.strokeStyle="#000000";
ctx.stroke();
b=Math.sqrt(1+b*b);
theta+=Math.atan(1/b);
c=y;
d=x;
y=(Math.sqrt(1+b*b))*Math.sin(theta);
x=(Math.sqrt(1+b*b))*Math.cos(theta);
count=count+1
totangle=totangle+Math.floor(Math.atan(1/Math.sqrt(count))*180/Math.PI)
console.log(totangle)
}
};

//circle to measure square root
canvas.addEventListener("click", function(event)
{
    let p=event.offsetX;
    let q=event.offsetY;
    ctx.beginPath();
    ctx.arc(400,300,Math.sqrt((p-400)*(p-400)+(q-300)*(q-300)),0,Math.PI*2);
    ctx.strokeStyle="#FF0000";
    ctx.stroke();
});


//is he clicking on the right place?

/*canvas.addEventListener("click",function(event)
{
    if(event.offsetX >= 395 && event.offsetX <= 405 && event.offsetY >= 295 && event.offsetY <= 305)
    {
        ctx.beginPath();
        ctx.arc(400,300,5,0,Math.PI*2);
        ctx.strokeStyle="#FF0000";
        ctx.stroke();
    }
});*/



/*
var proX=50.1*6.5/2,proY=27.7*6.5/2;
const protractor=new Image();
const resetCanvas = ()=>{
}

_protractor();
function _protractor()
{
    protractor.src= "protractor.png";
    protractor.addEventListener("load",function(){
   // setInterval(() => {
       // resetCanvas();
        ctx.drawImage(protractor,proX-(protractor.width*0.65)/2,proY-(protractor.height*0.65)/2,50.1*6.5,27.7*6.5);
   // },50);
    });
}; 

let draggable=false
canvas.onmousedown = (e) => {
    if(e.layerX <= (proX+ protractor.width*0.65/2) && e.layerX >= (proX - protractor.width*0.65/2) && e.layerY <= (proY+ protractor.height*0.65/2) && e.layerY >= (proY - protractor.height*0.65/2))
    draggable=true;
}
canvas.onmouseup = (e) => {
    draggable=false;
}
canvas.onmouseout = (e) => {
    draggable=false;
}
canvas.onmousemove = (e) => {
    if(draggable)
    {
        proX=e.layerX;
        proY=e.layerY;
    }
} */


//protractor as image in html, mapped by js

//window.onload = addListeners;
var currentX
var currentY

addListeners();
mouseflag=-1;
var protractordiv= document.getElementById("mytools");
function addListeners(){
    document.getElementById("mytools").style.position="absolute";
    document.getElementById("mytools").style.left=100+'px';
    document.getElementById("mytools").style.top=100+'px';
    document.getElementById("mytools").addEventListener('mousedown', mouseDown, false);
    window.addEventListener('mouseup', mouseUp, false);
}
function mouseUp(e)
{
    mouseflag=0;
    window.removeEventListener('mousemove', divMove, true);
    console.log(protractordiv.style.left,protractordiv.style.top);
    //instead of mouseflag, pair with trace function
//in if condition, check if coordinates are same and trace button is clicked with the same triangle count
//and angle
//    if(protractordiv.style.left=='345px' && protractordiv.style.top=='189px' && mouseflag==0)
//    {
 //       console.log('running boss');
 //       trace();
  //  }
}

function mouseDown(e){
  window.addEventListener('mousemove', divMove, true);
}

function divMove(e){
  protractordiv.style.position = 'absolute';
  protractordiv.style.top= (e.clientY-162.5452) + 'px';
  protractordiv.style.left =(e.clientX-162.825) + 'px';
  currentY=protractordiv.style.top;
  currentX=protractordiv.style.left;
  mouseflag=1;
}



//protractor rotation by 1 and 10 degrees
var r10=document.getElementById("clickbtn3");
var r1=document.getElementById("clickbtn4");
let rotatel=0;
let rotatel1=rotatel;

r10.addEventListener("click",rotateby10);
function rotateby10()
{
    rotatel=rotatel-10;
   // protractor.style.transform=`rotate(${rotatel}deg)`;
   // console.log(rotatel);
    protractor.style.transformOrigin = `${162.825}px ${162.5452}px`;
    protractor.style.transform = `rotate(${rotatel}deg)`;
    console.log(rotatel)
}
r1.addEventListener("click",rotateby1);
function rotateby1()
{
    rotatel=rotatel-1;
    //protractor.style.transform=`rotate(${rotatel}deg)`;
    //console.log(rotatel);
    protractor.style.transformOrigin = `${162.825}px ${162.5452}px`;
    protractor.style.transform = `rotate(${rotatel}deg)`;
}











//1 346.175px 190.455px

