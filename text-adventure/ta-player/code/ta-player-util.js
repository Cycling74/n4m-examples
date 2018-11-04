function charAt(text, idx) {
	outlet(0, text.charAt(idx));
}

function slice(text, num) {
	if (text.length === 0) {
		outlet("bang");
	} else if (text.length === 1) {
		outlet(text, 0);
	} else {
		outlet(0, text.slice(0, num), text.slice(num));
	}
}

function strlen(text) {
	if (!text) {
		outlet(0, 0);
	} else {
		outlet(0, text.length);
	}
}