
function setup() { 
  //canvas width, fullwidth, bankwidth, occupied width, depth one, depth two, depth three
 crossSectionBuilder(1200, 833, 680, 348, 24, 127, 111);

} 


function crossSectionBuilder(canvas, fullWidth, bankWidth, occWidth, dOne, dTwo, dThree){
  createCanvas(canvas, 800);//width/height
  background("#fff");
  noSmooth();
 
  //fullest width 
  strokeWeight(4);
  line(0, 10, fullWidth, 10);
  pointMaker(fullWidth/2, 10, 'green');
  // pointMaker(fullWidth,10, 'green');
  
  
  //bank width
  let bankStart = (fullWidth-bankWidth)/2;
  let bankEnd = bankStart+bankWidth;
  let bankOffset = 25;
  strokeWeight(3);
  stroke('red');
  line(bankStart, bankOffset, bankEnd, bankOffset );
  pointMaker(fullWidth/2, bankOffset, 'green');
  // pointMaker(bankEnd, bankOffset, 'green');
  
  //occupied width
  let occStart = (fullWidth-occWidth)/2;
  let occEnd = occStart+occWidth;
  let occOffset = 55;
  strokeWeight(3);
  stroke('blue');
  line(occStart, occOffset, occEnd, occOffset );
  pointMaker(fullWidth/2, occOffset, 'green');
  // pointMaker(occEnd, occOffset, 'green');
  // pointMaker(182+occStart,occOffset, 'orange');
  // pointMaker(occStart+(occWidth/6),occOffset, 'green');
  // pointMaker(occStart+(occWidth*5/6),occOffset, 'green');
  // pointMaker(occStart+(occWidth/2),occOffset, 'green');
  
  //depth one 
  stroke('blue');
  strokeWeight(3);
  line(occStart, occOffset, occStart+(occWidth/6),dOne+occOffset)
  
  //depth two
  line(occStart+(occWidth/6),dOne+occOffset, occStart+(occWidth/2),dTwo+occOffset);
  
  //depth three
  line(occStart+(occWidth/2),dTwo+occOffset, occEnd-(occEnd/6),dThree+occOffset);
  
  //final water line
  line(occEnd-(occEnd/6),dThree+occOffset,occEnd, occOffset);
}


function pointMaker(x, y, color){
  stroke(color); // Change the color
  strokeWeight(8);
  point(x, y);
  strokeWeight(0);
  textSize(12);
  let pointWords = x + ', ' + y;
  text(pointWords, x, y);
 
}