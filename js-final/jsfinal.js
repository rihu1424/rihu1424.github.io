const phoneInput = document.getElementById('phoneInput');
const resetButton = document.getElementById('resetButton');
const enterButton = document.getElementById('enterButton')
let lastLength = 0;
let formatInput = '';

phoneInput.addEventListener('input', () => {
    // no letters, just numbers
    let inputVal = phoneInput.value.replace(/\D/g,''); 
    let newInput = '';

    // make random digit for new number input
    if(inputVal.length > formatInput.length){
        newInput = inputVal.slice(formatInput.length);
        for(let i = 0; i < newInput.length; i++){
            formatInput += Math.floor(Math.random() * 10);
        }
    }

    // add hyphens for xxx-xxx-xxxx format
    phoneInput.value = formatInput.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3').substring(0, 12);
});

resetButton.addEventListener('click', () => {

    //reset input
    phoneInput.value = '';
    formatInput = '';
    lastLength = 0;

    //let the user know to try again
    document.getElementById('message').textContent = 'Try Again';

});

enterButton.addEventListener('click', function() {

    //display congrats when yes is clicked
    document.getElementById('message').textContent = 'Congratulations!';

});
