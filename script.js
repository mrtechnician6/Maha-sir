document.addEventListener('DOMContentLoaded', () => {
    const stages = document.querySelectorAll('.stage');
    const music = document.getElementById('bg-music');
    const progress = document.querySelector('.progress');
    const next1 = document.getElementById('next1');

    // Matrix Effect for Computer Teacher Surprise
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>[]{}/?+*";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function drawMatrix() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#0F0";
        ctx.font = fontSize + "px monospace";
        for (let i = 0; i < drops.length; i++) {
            const text = letters[Math.floor(Math.random() * letters.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        }
    }
    setInterval(drawMatrix, 33);

    // Initial Loading Animation
    setTimeout(() => {
        progress.style.width = '100%';
    }, 500);

    setTimeout(() => {
        next1.classList.remove('hidden');
    }, 4500);

    // Navigation logic
    function showStage(index) {
        stages.forEach((s, i) => s.classList.toggle('active', i === index));
    }

    document.getElementById('next1').addEventListener('click', () => {
        music.play().catch(() => {});
        showStage(1);
    });

    document.getElementById('next2').addEventListener('click', () => showStage(2));
    document.getElementById('next3').addEventListener('click', () => showStage(3));
    document.getElementById('restart').addEventListener('click', () => {
        location.reload(); 
    });
});
