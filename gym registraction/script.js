const client = {}
//console.log(client);


function showResult() {
  const fullName = document.getElementById("fullN");
  const fullN = fullName.value;
}

function showResult() {
  const age = document.getElementById("ageY");
  const ageY = age.value;

  const minAge = client.age - 18;
  const maxAge = client.age - 60;

  if (client.age > maxAge) {
    console.log("Sorry, find another gym");
  }

  if (client.age < minAge) {
    console.log("Sorry, find another gym");
  }

  if (client.age >= minAge && client.age <= maxAge) {
    console.log("Welcome. You are registrated!");
  }
}

function showResult() {
  const height = document.getElementById("heightM");
  const heightM = height.value;

  const minHeight = client.height - 160;
  const maxHeight = client.height -195;

  if (client.height > maxHeight) {
    console.log("Sorry, find another gym");
    }

  if (client.height < minHeight) {
    console.log("Sorry, find another gym");
    }
 
  if (client.height >= minHeight && client.height <= maxHeight){
    console.log("Welcome. You are registrated!");
  }
}

function showResult() {
  const weight = document.getElementById("weightK");
  const weightK = weight.value;

  const minWeight = client.weight - 60;
  const maxWeight = client.weight -120;

  if (client.weight > maxWeight) {
    console.log("Sorry, find another gym");
    }

  if (client.weight < minWeight) {
    console.log("Sorry, find another gym");
  }
 
  if (client.weight >= minWeight && client.weight <= maxWeight){
    console.log("Welcome. You are registrated!");
  }
}

function showResult() {
  document.getElementById("fullN").value = "";
  document.getElementById("ageY").value = "";
  document.getElementById("heightM").value = "";
  document.getElementById("weightK").value = "";
}
