document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('bg-music');
    
    // Pre-load the audio so it's ready the moment the button is clicked
    music.load(); 

    // Improved Navigation Function
    function showStage(index) {
        stages.forEach((s, i) => s.classList.toggle('active', i === index));
        
        if(index === 1) {
            // This is the direct command to play
            const playPromise = music.play();
            
            if (playPromise !== undefined) {
                playPromise.then(_ => {
                    console.log("Music started successfully!");
                }).catch(error => {
                    console.log("Playback prevented. Ensure the file path is correct.");
                });
            }
        }
    }
    // ... rest of your code
});
