// Inside your DOMContentLoaded function:

// 1. Timer to show the button
setTimeout(() => {
    const next1 = document.getElementById('next1');
    if (next1) {
        next1.style.display = 'block'; // Force visibility
        next1.style.opacity = '1';
    }
}, 4500); // 4.5 seconds for the loading bar to finish

// 2. Navigation with a "Hard Link" for mobile
const handleStart = (e) => {
    if (e) e.preventDefault();
    console.log("Button Tapped!"); // Check your browser console to see if this triggers
    
    // Play music
    const music = document.getElementById('bg-music');
    music.play().catch(() => console.log("Music blocked"));

    // Switch Stage
    document.getElementById('stage1').style.display = 'none';
    document.getElementById('stage2').style.display = 'flex';
    document.getElementById('stage2').classList.add('active');
};

const btn = document.getElementById('next1');
btn.addEventListener('click', handleStart);
btn.addEventListener('touchstart', handleStart, { passive: false });
