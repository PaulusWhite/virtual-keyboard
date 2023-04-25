let inputCharactersOnKeys = (keyboard, lang, usualCharactersArr) => {
	for (let i = 0; i < keyboard.children.length; i++) {
		let keyRow = keyboard.children[i];

		for (let y = 0; y < keyRow.children.length; y++) {
			let key = keyRow.children[y];
			let span = document.createElement("span");
			span.className = `keyboard__usualCharacter keyboard__usualCharacter_${lang}`;
			span.innerHTML = usualCharactersArr[i][y];
			key.append(span);
		}
	}
};

let createEngKeys = (keyboard) => {
	let usualCharactersArr = [
		["`", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "-", "=", "Backspace"],
		["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del"],
		["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
		["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "&#11165;", "Shift"],
		["Ctrl", "Win", "Alt", "Space", "Alt", "&#11164;", "&#11167;", "&#11166;", "Ctrl"],
	];

	inputCharactersOnKeys(keyboard, "eng", usualCharactersArr);
	// prettier-ignore
	let shiftCharactersArr = ["~","!","@","#","$","%","^","&","*","(",")","_","+","{","}","|",":","\"","<",">","?"];
	let allEngCharacters = keyboard.querySelectorAll(".keyboard__usualCharacter_eng");

	allEngCharacters.forEach((character, index) => {
		if (
			index < 13 ||
			index === 25 ||
			index == 26 ||
			index === 27 ||
			index === 39 ||
			index === 40 ||
			index === 50 ||
			index === 51 ||
			index === 52
		) {
			let span = document.createElement("span");
			span.className = "keyboard__shiftCharacter keyboard__shiftCharacter__eng";
			span.classList.add("keyboard__shiftCharacter_disable");
			span.innerHTML = shiftCharactersArr[0];
			shiftCharactersArr.shift();

			let parentKey = character.parentElement;
			parentKey.append(span);
		}
	});
};

let setStylesForKeys = (index, i, key) => {
	if (
		(index === 0 && i === 13) ||
		((index === 2 || index === 3) && i === 0) ||
		(index === 1 && i === 0) ||
		(index === 4 && i === 3)
	) {
		key.classList.add("keyboard__key_fullGrow");
	}
	if ((index === 2 || index === 3) && i === 12) {
		key.classList.add("keyboard__key_mediumGrow");
	}
	if (index === 4 && (i === 0 || i === 1 || i === 2 || i === 4 || i === 8)) {
		key.classList.add("keyboard__key_littleGrow");
	}
};

let createKeys = () => {
	let keyboard = document.querySelector(".keyboard");
	let rowsKeyAmountArr = [14, 15, 13, 13, 9];

	rowsKeyAmountArr.forEach((amount, index) => {
		let keyRow = document.createElement("div");
		keyRow.className = "keyboard__keyRow";

		for (let i = 0; i < amount; i++) {
			let key = document.createElement("div");
			key.className = "keyboard__key";
			setStylesForKeys(index, i, key);
			keyRow.append(key);
		}

		keyboard.append(keyRow);
	});

	createEngKeys(keyboard);
};

export default createKeys;
