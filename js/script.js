//elementos inativos até que alguma ação aconteça
document.getElementById("validBill").style.visibility = "hidden";
document.getElementById("validPeople").style.visibility = "hidden";
document.querySelectorAll(".tip_btn_click").forEach((e) => (e.disabled = true));

//calcular a gorjeta
function calcTip() {
  let bill = parseFloat(document.getElementById("bill").value);
  let tipBtn = document.querySelector(".tip_btn");
  let people = document.getElementById("people").value;

  tipBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const tipPorcent = e.target.value;
    const valueTip = bill * (tipPorcent / 100);

    bill = (bill + valueTip).toFixed(2);
    let tipAmount = (valueTip / people).toFixed(2);
    let total = (bill / people).toFixed(2);

    document.getElementById("valTip").innerHTML = `$${tipAmount}`;
    document.getElementById("tipPerson").innerHTML = `$${total}`;
  });
}

//bill não pode ser igual ou menor que 0
function validBill() {
  let bill = document.getElementById("bill").value;
  if (bill <= 0) {
    document.getElementById("validBill").style.visibility = "visible";
    document.getElementById("bill").style.border = "1px solid red";
  } else {
    document.getElementById("validBill").style.visibility = "hidden";
    document.getElementById("bill").style.border = "none";
    return true;
  }
}
//people não pode ser igual ou menor que 0
function validPeople() {
  let people = document.getElementById("people").value;
  if (people <= 0) {
    document.getElementById("validPeople").style.visibility = "visible";
    document.getElementById("people").style.border = "1px solid red";
  } else {
    document.getElementById("validPeople").style.visibility = "hidden";
    document.getElementById("people").style.border = "none";
  }
}

//botões só disponíveis quando tiver colocado um valor em bill e people
function btnActive() {
  let bill = document.getElementById("bill").value;
  let people = document.getElementById("people").value;

  if (bill > 0 && people > 0) {
    document.querySelectorAll(".tip_btn_click").forEach((e) => (e.disabled = false));
  } else {
    document.querySelectorAll(".tip_btn_click").forEach((e) => (e.disabled = true));
  }
}
// limpa todos os campos do app
function reset() {
  document.getElementById("valTip").innerHTML = "$0.00";
  document.getElementById("tipPerson").innerHTML = "$0.00";
  document.getElementById("bill").value = "";
  document.getElementById("bill").style.border = "none";
  document.getElementById("people").value = "";
  document.getElementById("people").style.border = "none";
  document.getElementById("validBill").style.visibility = "hidden";
  document.getElementById("validPeople").style.visibility = "hidden";
}
