// Array manipulation

// console.log(itemx);
const fruits = ["Apple", "Banana", "Mango"];
document.getElementById("result").innerHTML = fruits;

document.getElementById("push").onclick = function () {
  let itemx = document.getElementById("x").value;
  fruits.push(itemx);
  document.getElementById("result").innerHTML = fruits;
};

document.getElementById("pop").onclick = function () {
  fruits.pop();
  document.getElementById("result").innerHTML = fruits;
};
