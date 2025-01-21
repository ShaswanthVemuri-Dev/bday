// script.js

document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const birthdayMusic = document.getElementById('birthday-music');
    const cakeContainer = document.getElementById('cake-container');
    const cake = document.getElementById('cake');
    const backgroundAnimations = document.getElementById('background-animations');
    const happyBirthday = document.getElementById('happy-birthday');

    // Initialize Confetti
    function launchConfetti() {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });
        createAdditionalElements();
    }

    // Function to create floating hearts, balloons, sparkles, and yellow dots
    function createAdditionalElements() {
        // Number of each element to create
        const numLoveSymbols = 15;
        const numBalloons = 10;
        const numSparkles = 20;
        const numYellowDots = 30;

        // Function to create and animate elements
        function createElement(className, total) {
            for (let i = 0; i < total; i++) {
                const elem = document.createElement('div');
                elem.classList.add(className);

                // Random positions
                elem.style.left = `${Math.random() * 100}%`;
                elem.style.top = `${Math.random() * 100}%`;

                // Random animation delays to spread them out
                elem.style.animationDelay = `${Math.random() * 5}s`;

                backgroundAnimations.appendChild(elem);
            }
        }

        createElement('love-symbol', numLoveSymbols);
        createElement('birthday-balloon', numBalloons);
        createElement('sparkle', numSparkles);
        createElement('yellow-dot', numYellowDots);
    }

    // Cross-fade functions
    function fadeOut(element, duration) {
        element.style.transition = `opacity ${duration}ms`;
        element.style.opacity = '0';
    }

    function fadeIn(element, duration) {
        element.style.transition = `opacity ${duration}ms`;
        element.style.opacity = '1';
    }

    // Handle Yes Button Click
    yesBtn.addEventListener('click', () => {
        // Cross-fade out current content
        fadeOut(content, 500);
        // After 0.5 seconds, show the next step
        setTimeout(() => {
            showTurnOnLights();
        }, 500);
    });

    // Handle No Button Click
    noBtn.addEventListener('click', () => {
        // Cross-fade out current content
        fadeOut(content, 500);
        // After 0.5 seconds, show farewell message
        setTimeout(() => {
            content.innerHTML = `<p class="message">Oh, maybe next time! 😊</p>`;
            fadeIn(content, 500);
        }, 500);
    });

    // Show Turn On Lights Step
    function showTurnOnLights() {
        content.innerHTML = `
            <p class="message">Turn on the lights! 💡</p>
            <button id="turn-on-btn" class="btn">Turn On</button>
        `;
        fadeIn(content, 500);
        const turnOnBtn = document.getElementById('turn-on-btn');

        turnOnBtn.addEventListener('click', () => {
            turnOnBtn.disabled = true; // Prevent multiple clicks
            // Change theme with transition
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            // Launch confetti after theme transition
            setTimeout(() => {
                launchConfetti();
                // Proceed to next step after 0.3 seconds
                setTimeout(() => {
                    showPlayMusic();
                }, 300);
            }, 500); // 0.5 second delay for theme transition
        });
    }

    // Show Play Music Step
    function showPlayMusic() {
        content.innerHTML = `
            <p class="message">Do you want to hear some music? 🎶</p>
            <div class="buttons">
                <button id="play-music-btn" class="btn">Play Music</button>
            </div>
        `;
        fadeIn(content, 500);
        const playMusicBtn = document.getElementById('play-music-btn');

        playMusicBtn.addEventListener('click', () => {
            playMusicBtn.disabled = true; // Prevent multiple clicks
            // Play music
            birthdayMusic.play();
            // Launch confetti
            setTimeout(() => {
                launchConfetti();
                // Proceed to decorations after 0.3 seconds
                setTimeout(() => {
                    showAddDecorations();
                }, 300);
            }, 300); // 0.3 second delay before confetti
        });
    }

    // Show Add Decorations Step
    function showAddDecorations() {
        content.innerHTML = `
            <p class="message">Let’s add some decorations! 🎈✨</p>
            <button id="add-decorations-btn" class="btn">Add Decorations</button>
        `;
        fadeIn(content, 500);
        const addDecorationsBtn = document.getElementById('add-decorations-btn');

        addDecorationsBtn.addEventListener('click', () => {
            addDecorationsBtn.disabled = true; // Prevent multiple clicks
            // Launch confetti
            launchConfetti();
            // After 0.3 seconds, proceed to cut the cake and add background animations
            setTimeout(() => {
                showCutCake();
                // Add romantic background animations
                addRomanticBackgroundAnimations();
                // Show "Happy Birthday" message dropping from the top
                showHappyBirthdayMessage();
            }, 300);
        });
    }

    // Show Cut Cake Step
    function showCutCake() {
        content.innerHTML = `
            <p class="message">Let's cut the cake! 🎂</p>
            <button id="cut-cake-btn" class="btn">Cut the Cake</button>
        `;
        fadeIn(content, 500);
        const cutCakeBtn = document.getElementById('cut-cake-btn');

        cutCakeBtn.addEventListener('click', () => {
            cutCakeBtn.disabled = true; // Prevent multiple clicks
            // Reveal the cake image just below the button after 0.3 seconds
            setTimeout(() => {
                revealCake();
            }, 300);
        });
    }

    // Reveal the cake with smooth pop-up
    function revealCake() {
        // Make cake container visible
        cakeContainer.classList.remove('hidden');
        // Trigger the pop-up animation
        setTimeout(() => {
            cakeContainer.style.opacity = '1';
            cakeContainer.style.transform = 'translateX(-50%) scale(1)';
        }, 0); // Immediate after 0.3s delay

        // No further messages; cake image is the final element
    }

    // Add Romantic Background Animations after Decorations
    function addRomanticBackgroundAnimations() {
        // Already handled by createAdditionalElements during confetti
        // Additional specific animations can be added here if needed
    }

    // Show "Happy Birthday" Message Dropping from Top
    function showHappyBirthdayMessage() {
        happyBirthday.classList.remove('hidden');
        // The CSS animation will handle the drop-down
    }
});
