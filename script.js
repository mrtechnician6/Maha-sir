document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('bg-music');
    const stages = document.querySelectorAll('.stage');

    // 1. MATRIX EFFECT
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const chars = "0101ABCDEFGHIJKLMNOPQRSTUVWXYZ<>/?";
    const drops = Array(Math.floor(canvas.width/16)).fill(1);

    function drawMatrix() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#0ff"; 
        ctx.font = "15px monospace";
        drops.forEach((y, i) => {
            const text = chars[Math.floor(Math.random()*chars.length)];
            ctx.fillText(text, i*16, y*16);
            if(y*16 > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        });
    }
    setInterval(drawMatrix, 50);

    // 2. LOADING ANIMATION
    setTimeout(() => { document.getElementById('progress-bar').style.width = '100%'; }, 100);
    setTimeout(() => { document.getElementById('next1').classList.remove('hidden'); }, 4200);

    // 3. NAVIGATION (FIXED FOR MOBILE)
    function showStage(index) {
        stages.forEach((s, i) => s.classList.toggle('active', i === index));
        if(index === 1) music.play().catch(() => {});
    }

    const setBtn = (id, target) => {
        const b = document.getElementById(id);
        const action = (e) => { e.preventDefault(); showStage(target); };
        b.addEventListener('click', action);
        b.addEventListener('touchstart', action);
    };

    setBtn('next1', 1);
    setBtn('next2', 2);
    setBtn('next3', 3);
    document.getElementById('restart').addEventListener('click', () => location.reload());
});
