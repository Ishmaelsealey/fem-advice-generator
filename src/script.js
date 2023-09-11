// select the html elements used in the program

const headingId = document.querySelector('#js-advice-id');
const advice = document.querySelector('#js-advice');
const newAdviceBtn = document.querySelector('#js-dice-btn');

function getNewAdvice() {

	// Get the advice slip from api
	fetch('https://api.adviceslip.com/advice')

	// Make the response a json object
	.then(response => response.json())

	// Using the json response, edit the html page
	.then(data => {
		headingId.innerHTML = data.slip.id
		advice.innerHTML = `"${data.slip.advice}"`
	})
}

// run function when dice button is clicked
newAdviceBtn.addEventListener('click', getNewAdvice)

// run function upon initial page load
document.addEventListener('DOMContentLoaded', getNewAdvice)