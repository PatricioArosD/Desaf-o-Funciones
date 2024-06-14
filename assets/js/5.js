
document.addEventListener("keydown", function (event) {
  let div = document.querySelector("#key");
  if (event.key === "a") {
    div.style.backgroundColor = "pink";
  } else if (event.key === "s") {
    div.style.backgroundColor = "orange";
  } else if (event.key === "d") {
    div.style.backgroundColor = "blue";
  } else {
    div.style.backgroundColor = "none";
  }
});

document.addEventListener("keydown", function (eventDiv) {
  if (eventDiv.key === "q") {
    var newDiv1 = document.createElement("div");
    newDiv1.style.backgroundColor = "purple";
    newDiv1.style.width="200px"
    newDiv1.style.height="200px"
    var currentDiv1 = document.getElementById("div1");
    document.body.insertBefore(newDiv1, currentDiv1);
  } else if (eventDiv.key === "w") {
    var newDiv2 = document.createElement("div");
    newDiv2.style.backgroundColor = "grey";
    newDiv2.style.width="200px"
    newDiv2.style.height="200px"
    var currentDiv2 = document.getElementById("div2");
    document.body.insertBefore(newDiv2, currentDiv2);
  } else if (eventDiv.key === "e") {
    var newDiv3 = document.createElement("div");
    newDiv3.style.backgroundColor = "brown";
    newDiv3.style.width="200px"
    newDiv3.style.height="200px"
    var currentDiv3 = document.getElementById("div3");
    document.body.insertBefore(newDiv3, currentDiv3);
  } else {
    div.style.backgroundColor = "none";
  }
});
