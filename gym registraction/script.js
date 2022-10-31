
function showResult() { 
  const nameEl = document.getElementById("fullN");
  const nameValue = nameEl.value;

  const ageEl = document.getElementById("ageY");
  const ageValue = ageEl.value;

  const minAge = 18;
  const maxAge = 60;

  const heightEl = document.getElementById("heightM");
  const heightValue = heightEl.value;

  const minHeight = 160;
  const maxHeight = 195;

  const weightEl = document.getElementById("weightK");
  const weightValue = weightEl.value;

  const minWeight = 60;
  const maxWeight = 120;

  if (ageValue > maxAge) {
    alert("Sorry, find another gym. You are old");
  } else if (ageValue < minAge) {
    alert("Sorry, find another gym. You are too young");
  } else if (heightValue > maxHeight) {
    alert("Sorry, find another gym. We have a low ceiling for you");
  }  else if (heightValue < minHeight) {
    alert("Sorry, find another gym. You will not get to sports simulators")
  } else if(weightValue > maxWeight){ 
    alert("Sorry, find another gym. Your weight is too much"); 
  } else if (weightValue < minWeight) {
    alert("Sorry, find another gym. Your weight is too low")
  } else {
    alert("Welcome. You are registrated!");
  }
  
  eraseData();
} 

function eraseData() { 
  document.getElementById("fullN").value = "";
  document.getElementById("ageY").value = "";
  document.getElementById("heightM").value = "";
  document.getElementById("weightK").value = "";
}
