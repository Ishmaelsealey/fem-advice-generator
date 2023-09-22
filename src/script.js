// select the html elements used in the program

const HEADING = document.querySelector('#js-advice-id');
const ADVICE = document.querySelector('#js-advice');
const ADVICEBTN = document.querySelector('#js-dice-btn');

function getNewAdvice() {

	// Get the advice slip from api
	fetch('https://api.adviceslip.com/advice')

	// Make the response a json object
	.then(response => response.json())

	// Using the json response, edit the html page
	.then(data => {
		HEADING.innerHTML = data.slip.id
		ADVICE.innerHTML = `"${data.slip.advice}"`
	})
}

// run function when dice button is clicked
ADVICEBTN.addEventListener('click', getNewAdvice)

// run function upon initial page load
document.addEventListener('DOMContentLoaded', getNewAdvice)