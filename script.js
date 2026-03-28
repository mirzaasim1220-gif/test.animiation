const glitchData = [
    { text: "Error detected...", delay: 1500 },
    { text: "Missing component...", delay: 1500 },
    { text: "Searching...", delay: 2000 },
    { text: "Match found: Tayyab Bhai 😪😔", delay: 1000 }
];

function runGlitch() {
    const container = document.getElementById('glitch-lines');
    let currentTime = 0;

    glitchData.forEach((item, index) => {
        setTimeout(() => {
            const p = document.createElement('p');
            p.innerText = item.text;
            container.appendChild(p);

            // Agar last line hai, toh button dikhao
            if (index === glitchData.length - 1) {
                setTimeout(() => {
                    document.getElementById('btn1').classList.add('show-btn');
                }, 1500);
            }
        }, currentTime);
        currentTime += item.delay;
    });
}

function nextScene(num) {
    // Purane scene se active class hatao
    document.querySelectorAll('.scene').forEach(s => s.classList.remove('active'));
    
    // Naye scene par active class lagao
    const next = document.getElementById('scene' + num);
    next.classList.add('active');

    // Agar Scene 2 hai, toh lines ko fade-in karo
    if (num === 2) {
        const lines = next.querySelectorAll('.fade-line');
        lines.forEach((line, i) => {
            setTimeout(() => {
                line.style.opacity = "1";
            }, i * 2000); // Har line 2 second baad aayegi
        });

        // Letter ka button last mein dikhao
        setTimeout(() => {
            document.getElementById('btn2').classList.add('show-btn');
        }, lines.length * 2000 + 1000);
    }
}

// Start the sequence
window.onload = runGlitch;
