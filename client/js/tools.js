const $$ = (selector, mult = false) => {
	return mult
		? document.querySelectorAll(selector)
		: document.querySelector(selector);
};
