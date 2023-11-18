var animatedButton = document.getElementById('animatedButton');

    // Add an event listener to the button for a click event
    animatedButton.addEventListener('click', function() {
        // Add a class to the button to trigger a different animation
        animatedButton.classList.add('clicked');

        // Remove the class after a short delay to reset the animation
        setTimeout(function() {
            animatedButton.classList.remove('clicked');
        }, 300);
    });