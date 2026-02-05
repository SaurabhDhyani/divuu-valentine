const noBtn=document.getElementById("no");
const yesBtn=document.getElementById("yes");

// Typing
const text="Divuu ❤️ Saurabh";
let i=0;
(function type(){
if(i<text.length){
document.getElementById("type").innerHTML+=text[i++];
setTimeout(type,150);
}})();

// NO runs
noBtn.addEventListener("mouseover",()=>{
noBtn.style.left=Math.random()*80+"%";
noBtn.style.top=Math.random()*80+"%";
});

// YES
yesBtn.addEventListener("click",()=>{
document.querySelector(".buttons").style.display="none";
document.getElementById("loading").classList.remove("hidden");
confetti();

setTimeout(()=>location.href="celebrate.html",2000);
});

// Hearts
setInterval(()=>{
spawn("❤️","heart");
spawn("🥺","blush");
spawn(["yay","hehe","aww","💖"][Math.floor(Math.random()*4)],"fun");
},500);

function spawn(txt,cls){
let e=document.createElement("div");
e.className=cls;
e.innerHTML=txt;
e.style.left=Math.random()*100+"%";
e.style.fontSize=Math.random()*20+20+"px";
document.body.appendChild(e);
setTimeout(()=>e.remove(),5000);
}

// Confetti
function confetti(){
for(let i=0;i<80;i++){
let c=document.createElement("div");
c.style.position="fixed";
c.style.width="8px";
c.style.height="8px";
c.style.background="white";
c.style.left=Math.random()*100+"%";
c.style.top="-10px";
c.style.opacity=Math.random();
document.body.appendChild(c);
c.animate([{transform:"translateY(0)"},{transform:"translateY(100vh)"}],{duration:2000});
setTimeout(()=>c.remove(),2000);
}
}
