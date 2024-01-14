
let j= setInterval(() => {
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
document.getElementById("hour").innerHTML=h;
document.getElementById("minute").innerHTML=m;
document.getElementById("second").innerHTML=s;
}, 1000);