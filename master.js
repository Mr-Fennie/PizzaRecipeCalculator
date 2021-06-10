

const weightConverter = (valNum) => {
  document.getElementById("outputWater").innerHTML=valNum*(64.5/100);
  document.getElementById("outputSugar").innerHTML=valNum*(2.6/100);
  document.getElementById("outputSalt").innerHTML=valNum*(1.6/100);
  document.getElementById("outputYeast").innerHTML=valNum*(1.3/100);
}
