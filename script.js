let canvas=document.getElementById('canvas');
let ctx=canvas.getContext('2d');
let input=document.getElementById('color');
let lineWidths=document.getElementById('lineWidth')
let save=document.querySelector('.save')
let canvas_size=700;
let view=false;
ctx.fillStyle='white';
ctx.fillRect(0,0,canvas_size,canvas_size);
function mouseMove(event){
  x=event.offsetX;
  y=event.offsetY;
  if(!view){
    ctx.beginPath();
    ctx.moveTo(x,y);
  }else{
    ctx.lineTo(x,y);
    ctx.stroke();

  }
}
function mouseDown(){
  view=true;
}
function mouseUp(){
  view=false;
}
function colors(event){
  input.value=event.target.value;
  ctx.strokeStyle=input.value;
  ctx.stroke();
}
 function lineSize(event){
   lineWidths.value=event.target.value;
   ctx.lineWidth=lineWidths.value;
   ctx.stroke()
 }
 function clicku (){
 let dataURL = canvas.toDataURL("image/jpeg");
 let link = document.createElement("a");
 link.href = dataURL;
 link.download = "my-image-name.jpg";
 link.click();
 }
if(canvas){
  canvas.addEventListener('mousemove',mouseMove);
  canvas.addEventListener('mousedown',mouseDown);
  canvas.addEventListener('mouseup',mouseUp);
  
}
input.addEventListener('click',colors);
lineWidths.addEventListener('click',lineSize);
save.addEventListener('click',clicku);





































// function start(){
//   view=true
  
    
// }
// function stop(){
//     view=false
    
      
//   }

// function mouseMove(event){
//     x=event.offsetX; 
//     y=event.offsetY;
//    if(!view){
//        ctx.beginPath();
//        ctx.moveTo(x,y);
//    }else{
//            ctx.lineTo(x,y);
//            ctx.stroke();
//        }
   
// }
// function mouseDown(){
//     view=true
// }


// if(canvas){
// canvas.addEventListener('mousemove',mouseMove);
// canvas.addEventListener('mousedown',mouseDown);
// canvas.addEventListener('mouseup',stop)
// }























// let stepX=50;
// let stepY=50;
// ctx.beginPath();
// ctx.strokeStyle='violet';

// for( let i=0;i<=canvasWidth;i=i+stepX){
   
//    ctx.moveTo(i,0);
//    ctx.lineTo(i,canvasHeight);
  
// }
// for(i=0; i<=canvasHeight;i=i=i+stepY){
//     ctx.moveTo(0,i);
//     ctx.lineTo(canvasWidth,i);
// }
// ctx.stroke();
// let mindX=canvasWidth/2;
// let mindeY=canvasHeight/2
// ctx.beginPath();
// ctx.strokeStyle='black';
// ctx.moveTo(mindX,0);
// ctx.lineTo(mindX,canvasHeight);
// ctx.moveTo(0,mindeY);
// ctx.lineTo(canvasWidth,mindeY)
// ctx.stroke();










































// ctx.strokeStyle='green'//cvet linii
// ctx.lineWidth='20'
//  ctx.moveTo(20,50)//nacalo linii
//  ctx.lineTo(60,100)//konec linii
// ctx.stroke()//sama liniya

// //ctx.beginPath()//delat linii otdelnimi primer s cvetom
// //ctx.strokeStyle='red'

// ctx.lineTo(80,50)//prodoljeniye linii 
// ctx.lineCap='round'//delaet konci linii ovalnimi
// // ctx.closePath()//zarisovaet avtomatico fiquru primer s treuqolnikom
// ctx.stroke()//zarisovka linii
// ctx.fill()
// ctx.moveTo(80,50);
// ctx.lineTo(120,110);
// ctx.stroke();
// ctx.lineTo(150,50)
// ctx.fill();
// ctx.moveTo(150,50)
// ctx.lineTo(170,120)
// ctx.stroke()
// ctx.fill();
// ctx.moveTo(170,120)

// ctx.lineTo(200,50)
// ctx.fill();
// ctx.stroke();




// ctx.lineWidth='10'//wirina qranici 
// ctx.fillStyle='blue';//cvet prayamouqolnika zakraweniy
// ctx.fillRect(180,40,50,50)//sozdaet pryamouqolnik zakraweniy
// ctx.clearRect(0,0,400,200)//stiralet
// ctx.strokeStyle='red'//cvet qranici kvadrata
// ctx.strokeRect(200,20,50,50)//pustoy kvadret
