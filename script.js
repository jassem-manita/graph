function showSurprise() {
    var surpriseDiv = document.getElementById('surprise');
    var link = document.querySelector('.surprise-link');

    // Change background color to Valentine theme
    document.body.classList.add('valentine-theme');

    // Show the surprise message
    surpriseDiv.style.display = 'block';
    link.style.display = 'none';

    // Start playing background music
    var backgroundMusic = document.getElementById('background-music');
    backgroundMusic.play();

    // Animate emojis
    var emojiContainer = document.querySelector('.background-emojis');
    var emojiCount = 100; // Increase the number of emojis
    for (var i = 0; i < emojiCount; i++) {
        var emoji = document.createElement('div');
        emoji.classList.add('emoji');
        emoji.innerHTML = getRandomEmoji(); // Get a random emoji
        animateEmoji(emoji);
        emojiContainer.appendChild(emoji);
    }
}


function animateEmoji(emoji) {
    var screenHeight = window.innerHeight;
    var screenWidth = window.innerWidth;

    // Random starting position
    var startX = Math.random() * screenWidth;
    var startY = Math.random() * screenHeight;

    // Random ending position
    var endX = Math.random() * screenWidth;
    var endY = Math.random() * screenHeight;

    // Set initial position
    emoji.style.left = startX + 'px';
    emoji.style.top = startY + 'px';

    // Start animation
    emoji.style.transition = 'transform 10s linear';
    emoji.style.transform = 'translate(' + (endX - startX) + 'px, ' + (endY - startY) + 'px)';
}

function getRandomEmoji() {
    var emojis = ['❤️', '🎈', '😍', '💖', '💘', '💕','❤️', '🎈', '😍', '💖', '💘', '💕','❤️', '🎈', '😍', '💖', '💘', '💕']; // Add more emojis as needed
    var randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
}
    
