document.addEventListener('DOMContentLoaded', () => {
    const stages = document.querySelectorAll('.stage');
    const music = document.getElementById('bg-music');
    const progress = document.querySelector('.progress');
    const next1 = document.getElementById('next1');

    // 1. Matrix Background Logic
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/[]{}";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function drawMatrix() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#0F0";
        ctx.font = fontSize + "px monospace";
        for (let i = 0; i < drops.length; i++) {
            const text = characters[Math.floor(Math.random() * characters.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        }
    }
    setInterval(drawMatrix, 40);

    // 2. Stage 1 Timer Logic
    setTimeout(() => {
        if(progress) progress.style.width = '100%';
    }, 100);

    // Button appears after 4 seconds
    setTimeout(() => {
        next1.classList.remove('hidden');
    }, 4200);

    // 3. Navigation Function
    function goToStage(index) {
        stages.forEach((s, i) => {
            s.classList.toggle('active', i === index);
        });
        // Play music on first button click
        if (index === 1) {
            music.play().catch(() => console.log("Music blocked by browser"));
        }
    }

    // 4. Reliable Tapping (Click + Touch)
    const addSafeListener = (id, targetIndex) => {
        const btn = document.getElementById(id);
        if(!btn) return;

        const action = (e) => {
            e.preventDefault();
            goToStage(targetIndex);
        };

        btn.addEventListener('click', action);
        btn.addEventListener('touchstart', action, {passive: false});
    };

    addSafeListener('next1', 1);
    addSafeListener('next2', 2);
    addSafeListener('next3', 3);
    
    document.getElementById('restart').onclick = () => location.reload();
});
