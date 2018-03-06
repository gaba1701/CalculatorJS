// creat a function that takes input and set it in val variable 
function c(val) {
  document.getElementById("calc").value = val;
}
// add input into value
function v(val) {
  document.getElementById("calc").value += val;
}
// evaluates mathematical expression by taking input and trying to parse it
function e() {
  try {
    c(eval(document.getElementById("calc").value));
  } catch (e) {
    c("Error");
  }
}
