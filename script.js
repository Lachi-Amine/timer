let s = 0;
let m = 0;
let h = 0;
let j;
function start() {
  document.getElementById("start").disabled = true;
  j = setInterval(() => {
    s = s + 1;
    if (s == 60) {
      s = 0;
      m = m + 1;
    }
    if (m == 60) {
      m = 0;
      h = h + 1;
    }
    document.getElementById("hour").innerHTML = h;
    document.getElementById("minute").innerHTML = m;
    document.getElementById("second").innerHTML = s;
  }, 1000);
}

function stop() {
  clearInterval(j);
  document.getElementById("start").disabled = false;
}
function reset() {
  clearInterval(j);
  s = 0;
  m = 0;
  h = 0;
  document.getElementById("hour").innerHTML = h;
  document.getElementById("minute").innerHTML = m;
  document.getElementById("second").innerHTML = s;
  document.getElementById("start").disabled = false;
  start();
}
