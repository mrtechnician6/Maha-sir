document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('bg-music');
    const stages = document.querySelectorAll('.stage');
    const progressBar = document.getElementById('progress-bar');
    const next1 = document.getElementById('next1');

    // Matrix Background
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    const drops = Array(Math.floor(canvas.width/16)).fill(1);
    function draw() {
        ctx.fillStyle = "rgba(0,0,0,0.05)"; ctx.fillRect(0,0,canvas.width,canvas.height);
        ctx.fillStyle = "#0ff"; ctx.font = "15px monospace";
        drops.forEach((y, i) => {
            ctx.fillText(Math.floor(Math.random()*2), i*16, y*16);
            if(y*16 > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        });
    }
    setInterval(draw, 50);

    // Start Progress
    setTimeout(() => { progressBar.style.width = '100%'; }, 500);

    // Show button after 4 seconds
    setTimeout(() => { next1.style.display = 'inline-block'; }, 4500);

    function showStage(index) {
        stages.forEach((s, i) => s.classList.toggle('active', i === index));
        if(index === 1) {
            music.play().catch(e => console.log("Music blocked"));
        }
    }

    // Attach Events
    document.getElementById('next1').addEventListener('click', () => showStage(1));
    document.getElementById('next2').addEventListener('click', () => showStage(2));
    document.getElementById('next3').addEventListener('click', () => showStage(3));
    document.getElementById('restart').onclick = () => location.reload();
});
                          
