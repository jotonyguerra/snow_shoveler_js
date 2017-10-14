// your code, here
let snowFeet = 8/12;
let sideOne = 8;
let sideTwo = 20
let cubicFeet = snowFeet * sideTwo * sideOne
let mainDiv = document.getElementById('main');

if (cubicFeet < 50 ){
  mainDiv.innerHTML = "Cubic Feet = "+ Math.round(cubicFeet) + "\n" + "Quote Price = $20";
}
if (cubicFeet < 150 ){
  mainDiv.innerHTML = "Cubic Feet = "+ Math.round(cubicFeet) + "\n" + "Quote Price = $50";
}
if (cubicFeet < 300 ){
  mainDiv.innerHTML = "Cubic Feet = "+ Math.round(cubicFeet) + "\n" + "Quote Price = $100";
}

if (cubicFeet > 300 ){
  mainDiv.innerHTML = "Quote Price = $150";
}
