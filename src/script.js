const headingId = document.querySelector('#js-advice-id');
const advice = document.querySelector('#js-advice');
const newAdviceBtn = document.querySelector('#js-dice-btn');

function getNewAdvice() {
	console.log('Hello World!')
	fetch('https://api.adviceslip.com/advice')
	.then(response => response.json())
	.then(data => {
		console.log(data.slip)
		headingId.innerHTML = data.slip.id
		advice.innerHTML = data.slip.advice
	})
}

newAdviceBtn.addEventListener('click', getNewAdvice)