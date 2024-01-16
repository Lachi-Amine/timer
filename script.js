let s=0;
let m;
let h;
let j;
function start() {
    document.getElementById("start").disabled = true;
        j= setInterval(() => {
        s=s+1;
         m=Math.trunc(s/60);
         h=Math.trunc(m/60);
    document.getElementById("hour").innerHTML=h;
    document.getElementById("minute").innerHTML=m;
    document.getElementById("second").innerHTML=s;
    }, 1000);
}

function stop() {
    clearInterval(j);
    document.getElementById("start").disabled = false;
}
function reset() {
    clearInterval(j);
    s=0;
    m=0;
    h=0;
    document.getElementById("hour").innerHTML=h;
    document.getElementById("minute").innerHTML=m;
    document.getElementById("second").innerHTML=s;
    document.getElementById("start").disabled = false;
    start();    
}