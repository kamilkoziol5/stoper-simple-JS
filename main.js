const startBtn = document.querySelector('.main');
const resetBtn = document.querySelector('.reset');
const pomiarBtn = document.querySelector('.pomiar');
const panel = document.querySelector('.time-numbers');
const pomiary = document.querySelector('#pomiary');

let time = 0;
let active = false;
let indexInterval;
let amount = 1;

const startTimer = () => {
	startBtn.classList.toggle('active');

	if (!active) {
		active = !active;
		startBtn.textContent = 'Pauza';
		indexInterval = setInterval(start, 10);
	} else {
		active = !active;
		startBtn.textContent = 'Start';
		clearInterval(indexInterval);
	}
};

const start = () => {
	time++;
	timeFixed = (time / 100).toFixed(2);
	panel.textContent = timeFixed;
};

const resetTimer = () => {
	startBtn.classList.remove('active');
	active = false;
	time = 0;
	panel.textContent = '0:00';
	clearInterval(indexInterval);
	startBtn.textContent = 'Start';
	pomiary.textContent = '';
	pomiary.style.opacity = 0;
	amount = 1;
};

const addTime = () => {
	if (time === 0) return;
	else {
		const h2 = document.createElement('h2');
		pomiary.style.opacity = 1;
		h2.innerHTML = `
		${amount}. Twój pomiar to:
	<span class="pomiar-time">${timeFixed}</span> sekund
		`;

		pomiary.append(h2);
		amount++;
	}
};

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);
pomiarBtn.addEventListener('click', addTime);
