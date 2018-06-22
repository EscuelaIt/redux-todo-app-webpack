export function $s(selector, scope) {
	return (scope || document).getElementsByClassName(selector);
}

export function $id(selector, scope) {
	return (scope || document).getElementById(selector);
}

export function $on(target, type, callback) {
	target.addEventListener(type, callback);
}

export function $delegate(target, selector, type, handler, capture) {
	const dispatchEvent = event => {
		const targetElement = event.target;
		const potentialElements = target.querySelectorAll(selector);
		let i = potentialElements.length;

		while (i--) {
			if (potentialElements[i] === targetElement) {
				handler.call(targetElement, event);
				break;
			}
		}
	};

	$on(target, type, dispatchEvent, !!capture);
}