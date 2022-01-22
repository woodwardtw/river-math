
function setup() { 
  //canvas, fullWidth, bankWidth, bankLeft, bankRight, occWidth, dOne, dTwo, dThree
 crossSectionBuilder('Zone I',2300,1098.800,3530.400,1642.400,1579.000,1621.667,94.109,121.913,144.652);
} 


function crossSectionBuilder(title,canvas, fullWidth, bankWidth, bankLeft, bankRight, occWidth, dOne, dTwo, dThree){
  createCanvas(canvas, 700);//width/height
  background("#fff");
  noSmooth();
 
  textSize(18);
  //let pointWords = x + ', ' + y;
  // text('Full Width - '+ fullWidth +' m', fullWidth/2, 15);
  // //fullest width 
  // strokeWeight(4);
  // line(10, 20, fullWidth, 20);
  //pointMaker(fullWidth/2, 10, 'green');
  // pointMaker(fullWidth,10, 'green');
  text(title, bankWidth/2, 550)
  
  //bank width
  textSize(12);
  //let pointWords = x + ', ' + y;
  text('Bank Width - ' + fixMath(bankWidth) +' m', bankWidth/2, 45);
  let bankStart = 10;
  let bankEnd = bankStart+bankWidth;
  let bankOffset = 0;
  // strokeWeight(3);
  // stroke('brown');
  // line(bankStart, bankOffset+bankLeft, bankEnd, bankOffset+bankRight );
  // pointMaker(bankStart, bankOffset+bankLeft, 'green');
  // pointMaker(bankEnd, bankOffset+bankRight, 'green');
  
  //occupied width
  strokeWeight(0);
  text('Occupied Width - ' + fixMath(occWidth) +' m', bankWidth/2, 90);
  let occStart = (bankWidth-occWidth)/2;
  let occEnd = occStart+occWidth;
  let occOffset = 95;
  strokeWeight(3);
  stroke('blue');
  line(occStart, occOffset, occEnd, occOffset );
  //pointMaker(fullWidth/2, occOffset, 'green');
  // pointMaker(occEnd, occOffset, 'green');
  // pointMaker(182+occStart,occOffset, 'orange');
  //pointMaker(occStart,occOffset, 'green', 'thing');
  // pointMaker(occStart+(occWidth*5/6),occOffset, 'green');
  // pointMaker(occStart+(occWidth/2),occOffset, 'green');
  
  //depth one 
  stroke('blue');
  strokeWeight(3);
  fill(124, 201, 247, 127);
  // line(occStart, occOffset, occStart+(occWidth/6),dOne+occOffset)
  
  // //depth two
  // line(occStart+(occWidth/6),dOne+occOffset, occStart+(occWidth/2),dTwo+occOffset);
  
  // //depth three
  // line(occStart+(occWidth/2),dTwo+occOffset, occEnd-(occEnd/6),dThree+occOffset);
  
  // //final water line
  // line(occEnd-(occEnd/6),dThree+occOffset,occEnd, occOffset);

  beginShape();
    vertex(occStart, occOffset);
    vertex(occStart+(occWidth/6),dOne+occOffset);
        
    vertex(occStart+(occWidth/2),dTwo+occOffset);
    vertex(occEnd-(occEnd/6),dThree+occOffset);
    
    vertex(occEnd, occOffset);
  endShape(CLOSE);

   strokeWeight(0);
  fill('black');
  text(fixMath(dOne)+' m', occStart+(occWidth/6)+5,dOne+occOffset);

  text(fixMath(dTwo)+' m', occStart+(occWidth/2),dTwo+occOffset+15);
  text(fixMath(dThree)+' m', occEnd-(occEnd/6)+10,dThree+occOffset);
}


function pointMaker(x, y, color, theText){
  stroke(color); // Change the color
  strokeWeight(8);
  point(x, y);
  strokeWeight(0);
  textSize(12);

  //let pointWords = x + ', ' + y;
  text(theText, x, y);
 
}

function biggestBank(x,y){
  if (x>y){
    return x;
  } else {
    return y;
  }
}

function fixMath(number){
  let realNumber = number/1000
  return Math.round((realNumber + Number.EPSILON) * 1000) / 1000;
}

function download() {
  var download = document.getElementById("download");
  var image = document.getElementById("defaultCanvas0").toDataURL("image/png", 1)
      .replace("image/png", "image/octet-stream");
  download.setAttribute("href", image);
  download.setAttribute("download", 'river-section.png')
}