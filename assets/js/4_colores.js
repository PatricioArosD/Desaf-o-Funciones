let div1 = document.querySelector("#divid1");
let div2 = document.querySelector("#divid2");
let div3 = document.querySelector("#divid3");
let div4 = document.querySelector("#divid4");

div1.addEventListener("click", () => {
  if (div1.style.backgroundColor !="black") {
    div1.style.backgroundColor ="black"
  } else {
  div1.style.backgroundColor ="blue"
  }
});
div2.addEventListener("click", () => {
  if (div2.style.backgroundColor !="black") {
    div2.style.backgroundColor ="black"
  } else {
  div2.style.backgroundColor ="red"
  }
});
div3.addEventListener("click", () => {
  if (div3.style.backgroundColor !="black") {
    div3.style.backgroundColor ="black"
  } else {
  div3.style.backgroundColor ="green"
  }
});
div4.addEventListener("click", () => {
  if (div4.style.backgroundColor !="black") {
    div4.style.backgroundColor ="black"
  } else {
  div4.style.backgroundColor ="yellow"
  }
});
