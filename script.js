document.addEventListener('DOMContentLoaded', () => {
    const stages = document.querySelectorAll('.stage');
    const backgroundMusic = document.getElementById('background-music');
    const loadingProgress = document.querySelector('.progress');
    const next1Button = document.getElementById('next1');

    let currentStageIndex = 0;

    // --- Core Navigation Function ---
    function showStage(index) {
        stages.forEach((stage, i) => {
            stage.classList.toggle('active', i === index);
        });
        currentStageIndex = index;
    }

    // --- Stage 1 Logic (The Loading Sequence) ---
    function startInitialSequence() {
        // 1. Reset progress
        loadingProgress.style.width = '0%';
        next1Button.style.display = 'none'; 

        // 2. Start the bar animation
        setTimeout(() => {
            loadingProgress.style.transition = "width 4s linear";
            loadingProgress.style.width = '100%';
        }, 500);

        // 3. Force the button to appear after 4.5 seconds (Safety Timer)
        setTimeout(() => {
            next1Button.style.display = 'block';
            next1Button.classList.remove('hidden');
            next1Button.style.opacity = '1';
        }, 4500);
    }

    // --- Event Listeners ---
    
    // Stage 1 to Stage 2 + Start Music
    next1Button.addEventListener('click', () => {
        backgroundMusic.play().catch(e => console.log("Audio play deferred"));
        showStage(1);
    });

    // Stage 2 to 3
    document.getElementById('next2').addEventListener('click', () => showStage(2));

    // Stage 3 to 4
    document.getElementById('next3').addEventListener('click', () => showStage(3));

    // Restart logic
    document.getElementById('restart').addEventListener('click', () => {
        showStage(0);
        startInitialSequence();
    });

    // Run the sequence on load
    startInitialSequence();
});
