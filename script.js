const glitchLines = [
    "Error detected...",
    "Missing component...",
    "Searching...",
    "Match found: Tayyab 😪😔"
];

let lineIndex = 0;

function runGlitch() {
    const textElement = document.getElementById('glitch-text');
    
    if (lineIndex < glitchLines.length) {
        let p = document.createElement('p');
        p.innerText = glitchLines[lineIndex];
        textElement.appendChild(p);
        
        lineIndex++;
        let delay = lineIndex === 3 ? 2000 : 1500; // Longer pause for "Searching"
        setTimeout(runGlitch, delay);
    } else {
        // Show the button after the last line
        setTimeout(() => {
            document.getElementById('btn1').classList.add('show-btn');
        }, 2000);
    }
}

function nextScene(sceneNumber) {
    // Hide all scenes
    document.querySelectorAll('.scene').forEach(s => s.classList.remove('active'));
    // Show the specific scene
    document.getElementById('scene' + sceneNumber).classList.add('active');
}

// Start the intro
window.onload = runGlitch;
