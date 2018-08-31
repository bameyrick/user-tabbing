(function(): void {
	const CLASS_NAME = 'tabbing';
	const body = document.body;

	function initTabbing(): void {
		body.addEventListener('keyup', handleKeyup);
		body.addEventListener('click', handleClick);
	}

	function handleKeyup(e: KeyboardEvent): void {
		if (e.keyCode === 9) {
			body.classList.add(CLASS_NAME);
		}
	}

	function handleClick(): void {
		body.classList.remove(CLASS_NAME);
	}

	initTabbing();
})();
