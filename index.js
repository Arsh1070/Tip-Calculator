let cal = document.getElementById("calculate");
let dspAmt = document.getElementById("screen");
let Each = document.getElementById("each");

cal.addEventListener("click", () => {
  let dsp = document.getElementById("display");
  let amt = document.getElementById("amount").value;
  let sev = document.getElementById("service").value;
  let ppl = document.getElementById("people").value;

  if (amt === "" || sev === "") {
    alert("please enter values");
    return;
  }
  if (ppl === "" || ppl <= 1) {
    ppl = 1;
    Each.style.display = "none";
  } else {
    Each.style.display = "block";
  }

  let total = (amt * sev) / ppl;
  total = total.toFixed(2);
  dsp.innerHTML = total;
});
Each.style.display = "none";
dspAmt.style.display = "none";
