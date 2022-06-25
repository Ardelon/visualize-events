(() => {
	const clickCounter = document.getElementById('click-div');
	const contextMenuCounter = document.getElementById('contextmenu-div');
	const dBClickCounter = document.getElementById('dblclick-div');
	const mouseDownCounter = document.getElementById('mousedown-div');
	const mouseEnterCounter = document.getElementById('mouseenter-div');
	const mouseLeaveCounter = document.getElementById('mouseleave-div');
	const mouseMoveCounter = document.getElementById('mousemove-div');
	const mouseOutCounter = document.getElementById('mouseout-div');
	const mouseOverCounter = document.getElementById('mouseover-div');
	const mouseUpCounter = document.getElementById('mouseup-div');

	const eventArea = document.getElementById('event-area');

	eventArea.addEventListener('click', (e) => {
		e.preventDefault();
		clickCounter.classList.add('event-fired');
		setTimeout(() => {
			clickCounter.classList.remove('event-fired');
		}, 100);
		const counterValue = Number(
			document.querySelector('#click-div p span').innerText
		);
		document.querySelector('#click-div p span').innerText = counterValue + 1;
	});
	eventArea.addEventListener('contextmenu', (e) => {
		e.preventDefault();
		contextMenuCounter.classList.add('event-fired');
		setTimeout(() => {
			contextMenuCounter.classList.remove('event-fired');
		}, 100);
		const counterValue = Number(
			document.querySelector('#contextmenu-div p span').innerText
		);
		document.querySelector('#contextmenu-div p span').innerText =
			counterValue + 1;
	});
	eventArea.addEventListener('dblclick', (e) => {
		e.preventDefault();
		dBClickCounter.classList.add('event-fired');
		setTimeout(() => {
			dBClickCounter.classList.remove('event-fired');
		}, 100);
		const counterValue = Number(
			document.querySelector('#dblclick-div p span').innerText
		);
		document.querySelector('#dblclick-div p span').innerText = counterValue + 1;
	});
	eventArea.addEventListener('mousedown', (e) => {
		e.preventDefault();
		mouseDownCounter.classList.add('event-fired');
		setTimeout(() => {
			mouseDownCounter.classList.remove('event-fired');
		}, 100);
		const counterValue = Number(
			document.querySelector('#mousedown-div p span').innerText
		);
		document.querySelector('#mousedown-div p span').innerText =
			counterValue + 1;
	});
	eventArea.addEventListener('mouseenter', (e) => {
		e.preventDefault();
		mouseEnterCounter.classList.add('event-fired');
		setTimeout(() => {
			mouseEnterCounter.classList.remove('event-fired');
		}, 100);
		const counterValue = Number(
			document.querySelector('#mouseenter-div p span').innerText
		);
		document.querySelector('#mouseenter-div p span').innerText =
			counterValue + 1;
	});
	eventArea.addEventListener('mouseleave', (e) => {
		e.preventDefault();
		mouseLeaveCounter.classList.add('event-fired');
		setTimeout(() => {
			mouseLeaveCounter.classList.remove('event-fired');
		}, 100);
		const counterValue = Number(
			document.querySelector('#mouseleave-div p span').innerText
		);
		document.querySelector('#mouseleave-div p span').innerText =
			counterValue + 1;
	});
	eventArea.addEventListener('mousemove', (e) => {
		e.preventDefault();
		mouseMoveCounter.classList.add('event-fired');
		setTimeout(() => {
			mouseMoveCounter.classList.remove('event-fired');
		}, 100);
		const counterValue = Number(
			document.querySelector('#mousemove-div p span').innerText
		);
		document.querySelector('#mousemove-div p span').innerText =
			counterValue + 1;
	});
	eventArea.addEventListener('mouseout', (e) => {
		e.preventDefault();
		mouseOutCounter.classList.add('event-fired');
		setTimeout(() => {
			mouseOutCounter.classList.remove('event-fired');
		}, 100);
		const counterValue = Number(
			document.querySelector('#mouseout-div p span').innerText
		);
		document.querySelector('#mouseout-div p span').innerText = counterValue + 1;
	});
	eventArea.addEventListener('mouseover', (e) => {
		e.preventDefault();
		mouseOverCounter.classList.add('event-fired');
		setTimeout(() => {
			mouseOverCounter.classList.remove('event-fired');
		}, 100);
		const counterValue = Number(
			document.querySelector('#mouseover-div p span').innerText
		);
		document.querySelector('#mouseover-div p span').innerText =
			counterValue + 1;
	});
	eventArea.addEventListener('mouseup', (e) => {
		e.preventDefault();
		mouseUpCounter.classList.add('event-fired');
		setTimeout(() => {
			mouseUpCounter.classList.remove('event-fired');
		}, 100);
		const counterValue = Number(
			document.querySelector('#mouseup-div p span').innerText
		);
		document.querySelector('#mouseup-div p span').innerText = counterValue + 1;
	});
})();
