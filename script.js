document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('bg-music');
    const stages = document.querySelectorAll('.stage');

    // 1. IMPROVED MATRIX EFFECT
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const chars = "0101COMPUTERERRORACCESSGRANTED6789";
    const drops = Array(Math.floor(canvas.width/18)).fill(1);

    function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#0ff";
        ctx.font = "15px monospace";
        drops.forEach((y, i) => {
            const text = chars[Math.floor(Math.random()*chars.length)];
            ctx.fillText(text, i*18, y*18);
            if(y*18 > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        });
    }
    setInterval(draw, 50);

    // 2. STAGE 1 LOGIC
    setTimeout(() => { document.getElementById('progress-bar').style.width = '100%'; }, 100);
    setTimeout(() => { document.getElementById('next1').classList.remove('hidden'); }, 4200);

    // 3. NAVIGATION (MOBILE FIX)
    function showStage(index) {
        stages.forEach((s, i) => s.classList.toggle('active', i === index));
        if(index === 1) music.play().catch(() => console.log("Music play blocked by browser."));
    }

    const bindBtn = (id, target) => {
        const btn = document.getElementById(id);
        const trigger = (e) => { e.preventDefault(); showStage(target); };
        btn.addEventListener('click', trigger);
        btn.addEventListener('touchstart', trigger);
    };

    bindBtn('next1', 1);
    bindBtn('next2', 2);
    bindBtn('next3', 3);
    document.getElementById('restart').addEventListener('click', () => location.reload());
});
            
