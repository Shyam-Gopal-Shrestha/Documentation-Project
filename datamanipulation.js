// Array manipulation

// console.log(itemx);
const fruits = ["Apple", "Banana", "Mango"];
document.getElementById("result").innerHTML = fruits;

// To push in array
document.getElementById("push").onclick = function () {
  let itemx = document.getElementById("x").value;
  fruits.push(itemx);
  document.getElementById("result").innerHTML = fruits;
};

// To pop from array
document.getElementById("pop").onclick = function () {
  fruits.pop();
  document.getElementById("result").innerHTML = fruits;
};
