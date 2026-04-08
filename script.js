function fireworkEffect(x, y){
    for(let i=0;i<40;i++){
        let f = document.createElement("div");
        f.className = "firework";

        let angle = Math.random() * 2 * Math.PI;
        let radius = Math.random() * 200;

        f.style.left = x + "px";
        f.style.top = y + "px";

        f.style.setProperty('--x', Math.cos(angle)*radius + "px");
        f.style.setProperty('--y', Math.sin(angle)*radius + "px");

        document.body.appendChild(f);

        setTimeout(()=>f.remove(),1000);
    }
}

function blowCandle(){
    document.getElementById("flame").style.display="none";

    document.getElementById("card").classList.add("show");

    let music = document.getElementById("music");
    music.play();

    // 🎆 FIREWORK DI TENGAH
    fireworkEffect(window.innerWidth/2, window.innerHeight/2);

    // 🎆 tambahan random biar rame
    for(let i=0;i<3;i++){
        setTimeout(()=>{
            fireworkEffect(
                Math.random()*window.innerWidth,
                Math.random()*window.innerHeight/2
            );
        }, i*300);
    }
}