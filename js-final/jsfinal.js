const phoneInput = document.getElementById('phoneInput');
const resetButton = document.getElementById('resetButton');
const enterButton = document.getElementById('enterButton')
let lastLength = 0;
let formatInput = '';

phoneInput.addEventListener('keydown', (e) => {
    // Check for spacebar key press
    if (e.key === ' ') {
        // also display an annoying pop-up when spacebar is hit
        alert('This is going to happen every time, you have no control over this or the numbers.');
    }

    // no letters, just numbers
    if (e.key !== ' ' || formatInput.length >= 10) {
        e.preventDefault();
        return;
    }

    // make random digit for new input
    formatInput += Math.floor(Math.random() * 10);

    // add hyphens for xxx-xxx-xxxx format
    phoneInput.value = formatInput.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3').substring(0, 12);
});

resetButton.addEventListener('click', () => {

    //reset input
    phoneInput.value = '';
    formatInput = '';
    lastLength = 0;

    //let the user know to try again
    document.getElementById('message').textContent = 'Oh nooooooo! Try Again';

});

enterButton.addEventListener('click', function() {

    //display congrats when yes is clicked
    document.getElementById('message').textContent = 'Not sure I believe you, but congratulations!';

});
