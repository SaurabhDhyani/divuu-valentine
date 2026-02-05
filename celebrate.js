// Floating hearts
setInterval(()=>{
    let h=document.createElement("div");
    h.className="heart";
    h.innerHTML="💖";
    h.style.left=Math.random()*100+"%";
    h.style.fontSize=Math.random()*30+20+"px";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),6000);
    },300);
    
    // FINAL LOVE POPUP after 3 seconds
    setTimeout(()=>{
    document.getElementById("lovePopup").classList.add("show");
    fireworks();
    },3000);
    
    // Fireworks sparkles
    function fireworks(){
    for(let i=0;i<120;i++){
    let s=document.createElement("div");
    s.style.position="fixed";
    s.style.width="6px";
    s.style.height="6px";
    s.style.background="pink";
    s.style.left="50%";
    s.style.top="50%";
    document.body.appendChild(s);
    
    let x=(Math.random()-0.5)*600;
    let y=(Math.random()-0.5)*600;
    
    s.animate([{transform:"translate(0,0)"},{transform:`translate(${x}px,${y}px)`}],{duration:1500});
    setTimeout(()=>s.remove(),1500);
    }
    }
    