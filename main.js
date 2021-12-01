
function setup() { 
  //canvas width, fullwidth, bankwidth, occupied width, depth one, depth two, depth three
 crossSectionBuilder(1200, 833, 680, 5, 19, 348, 24, 127, 111);
} 


function crossSectionBuilder(canvas, fullWidth, bankWidth, bankLeft, bankRight, occWidth, dOne, dTwo, dThree){
  createCanvas(canvas, 800);//width/height
  background("#fff");
  noSmooth();
 
  textSize(14);
  //let pointWords = x + ', ' + y;
  text('Full Width - '+ fullWidth, fullWidth/2, 15);
  //fullest width 
  strokeWeight(4);
  line(10, 20, fullWidth, 20);
  //pointMaker(fullWidth/2, 10, 'green');
  // pointMaker(fullWidth,10, 'green');
  
  
  //bank width
  textSize(12);
  //let pointWords = x + ', ' + y;
  text('Bank Width - ' + bankWidth, fullWidth/2, 45);
  let bankStart = (fullWidth-bankWidth)/2;
  let bankEnd = bankStart+bankWidth;
  let bankOffset = 45;
  strokeWeight(3);
  stroke('red');
  line(bankStart, bankOffset+bankLeft, bankEnd, bankOffset+bankRight );
  //pointMaker(bankStart, bankOffset+bankLeft, 'green');
  //pointMaker(bankEnd, bankOffset+bankRight, 'green');
  
  //occupied width
  strokeWeight(0);
  text('Occupied Width - ' + occWidth, fullWidth/2, 90);
  let occStart = (fullWidth-occWidth)/2;
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


function download() {
  var download = document.getElementById("download");
  var image = document.getElementById("defaultCanvas0").toDataURL("image/png", 1)
      .replace("image/png", "image/octet-stream");
  download.setAttribute("href", image);
  download.setAttribute("download", 'river-section.png')
}