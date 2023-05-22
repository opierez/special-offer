// Grab DOM Elements
const form = document.getElementById('reservation-form')
const button = document.querySelector('button');
const inputFields = document.querySelectorAll('input')

// Add Event Listeners
form.addEventListener('submit', handleSubmit)

// Handles user's form submission
function handleSubmit(e) {
    e.preventDefault()
    console.log("I was clicked")

    document.body.style.backgroundImage = "none"; // removes the background image
    document.body.style.setProperty("background-color", "#952861", "important"); // changes the background color
    inputFields.forEach(input => input.classList.add('submitted')); // adds a class to the input fields to change hover border color

    form.reset() // resets the form input fields 
     
}