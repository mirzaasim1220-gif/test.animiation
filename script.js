// 1. Scene 1 Configuration (The Glitch System)
const glitchData = [
    { text: "Error detected...", delay: 1500 },
    { text: "Missing component...", delay: 1500 },
    { text: "Searching...", delay: 2000 },
    { text: "Match found: Tayyab Bhai 😪😔", delay: 1000 }
];

// 2. Main Logic to run on page load
window.onload = () => {
    runGlitchSequence();
};

function runGlitchSequence() {
    const container = document.getElementById('glitch-lines');
    let cumulativeDelay = 0;

    glitchData.forEach((item, index) => {
        setTimeout(() => {
            const p = document.createElement('p');
            p.innerText = item.text;
            
            // Add red glow if it's the match found line
            if (item.text.includes("Match found")) {
                p.style.color = "#ff3e3e";
                p.style.textShadow = "0 0 15px rgba(255, 62, 62, 0.8)";
                p.style.fontWeight = "bold";
            }

            container.appendChild(p);
            
            // Subtle flickering entry
            p.style.opacity = "1";

            // If it's the last line, show the button after a short pause
            if (index === glitchData.length - 1) {
                setTimeout(() => {
                    const btn = document.getElementById('btn1');
                    btn.classList.add('show-btn');
                    btn.style.opacity = "1";
                }, 1500);
            }
        }, cumulativeDelay);
        
        cumulativeDelay += item.delay;
    });
}

// 3. Scene Switcher Function
function nextScene(sceneNumber) {
    // Select all scenes and hide them
    const allScenes = document.querySelectorAll('.scene');
    allScenes.forEach(scene => {
        scene.classList.remove('active');
        scene.style.display = 'none';
    });

    // Show the targeted scene
    const targetScene = document.getElementById('scene' + sceneNumber);
    targetScene.classList.add('active');
    targetScene.style.display = 'flex';

    // Special logic for Scene 2 (The Letter)
    if (sceneNumber === 2) {
        animateLetter();
    }
}

// 4. Letter Animation Logic
function animateLetter() {
    const lines = document.querySelectorAll('.fade-line');
    const footer = document.querySelector('.letter-footer');
    const nextBtn = document.getElementById('btn2');

    lines.forEach((line, index) => {
        setTimeout(() => {
            line.style.opacity = "1";
            line.style.transform = "translateY(0)";
            line.style.transition = "all 1.5s ease";
        }, index * 2500); // 2.5 seconds gap between lines for reading
    });

    // Show the footer and button after all lines appear
    const totalTime = lines.length * 2500;
    
    setTimeout(() => {
        footer.style.opacity = "1";
        footer.style.transition = "opacity 2s ease";
    }, totalTime);

    setTimeout(() => {
        nextBtn.classList.add('show-btn');
        nextBtn.style.opacity = "1";
    }, totalTime + 2000);
}
