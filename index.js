const numEnter =document.getElementById("num");
const buttonEl = document.getElementById("convert-btn");
const lengthEl = document.getElementById("length");
const volEl = document.getElementById("volume");
const massEl= document.getElementById("mass");

buttonEl.addEventListener("click",function(){    
    
    lengthEl.textContent= convertAsLength(numEnter.value);
    volEl.textContent= convertAsVolume(numEnter.value);
    massEl.textContent= convertAsMass(numEnter.value);
})

function convertAsLength(a){
    let metre1 = a*3.28084;
    let feet1 = a*0.3048;
     
    let result = `${a} meters = ${metre1.toFixed(3)} | ${a} feet = ${feet1.toFixed(3)}`;
    return result;
}

function convertAsVolume(a){
    let lt1 = a*0.264172;
    let g1 = a*3.78541;
     
    let result = `${a} meters = ${lt1.toFixed(3)} | ${a} feet = ${g1.toFixed(3)}`;
    return result;
}

function convertAsMass(a){
    let kg1 = a*2.20462;
    let pd1 = a*0.453592;
     
    let result = `${a} meters = ${kg1.toFixed(3)} | ${a} feet = ${pd1.toFixed(3)}`;
    return result;
}