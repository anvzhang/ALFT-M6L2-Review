let array = ["a", "b", "c"];

let third = array[2];

for (let i = 1; i <= 20; i++) {
  console.log(i);
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

function lol(a) {
  return a * 2.75;
}

console.log(lol(1));

let button = document.querySelector("button");
let p = document.querySelector("p");

button.addEventListener("click", function() {
  if (p.innerHTML === "hi") {
    p.innerHTML = "not hi";
  } else {
    p.innerHTML = "hi";
  }
})