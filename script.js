document.addEventListener('DOMContentLoaded', () => {
    const stages = document.querySelectorAll('.stage');
    const backgroundMusic = document.getElementById('background-music');
    let currentStageIndex = 0;

    // --- Stage 1 Elements ---
    const stage1 = document.getElementById('stage1');
    const loadingProgress = stage1.querySelector('.progress');
    const next1Button = document.getElementById('next1');

    // --- Play music on first interaction (browser policy) ---
    function playMusicOnce() {
        if (backgroundMusic.paused) {
            backgroundMusic.play().catch(error => {
                console.log("Autoplay prevented:", error);
                // Optionally show a message to the user to click anywhere to play music
            });
            document.removeEventListener('click', playMusicOnce); // Play once
            document.removeEventListener('keydown', playMusicOnce);
        }
    }
    document.addEventListener('click', playMusicOnce);
    document.addEventListener('keydown', playMusicOnce);


    // Function to show a specific stage
    function showStage(index) {
        stages.forEach((stage, i) => {
            if (i === index) {
                stage.classList.add('active');
            } else {
                stage.classList.remove('active');
            }
        });
        currentStageIndex = index;
    }

    // Initialize Stage 1 animations
    function initializeStage1() {
        // Reset progress bar for replay
        loadingProgress.style.width = '0%';
        next1Button.classList.add('hidden'); // Hide button initially

        setTimeout(() => {
            loadingProgress.style.width = '100%'; // Start loading animation
        }, 100); // Small delay to ensure CSS transition works from 0

        loadingProgress.addEventListener('transitionend', () => {
            // Once loading is complete, show the button
            next1Button.classList.remove('hidden');
        }, { once: true }); // Ensure this listener only fires once per load
    }

    // --- Navigation Handlers ---
    document.getElementById('next1').addEventListener('click', () => {
        showStage(1); // Go to Stage 2 (index 1)
    });

    document.getElementById('next2').addEventListener('click', () => {
        showStage(2); // Go to Stage 3 (index 2)
    });

    document.getElementById('next3').addEventListener('click', () => {
        showStage(3); // Go to Stage 4 (index 3)
    });

    document.getElementById('restart').addEventListener('click', () => {
        showStage(0); // Go back to Stage 1
        initializeStage1(); // Re-initialize Stage 1 animations
    });

    // Initial load: show Stage 1 and start its animations
    showStage(0);
    initializeStage1();
});
