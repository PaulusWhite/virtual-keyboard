import { setKeyCodes, setCoupleKeyCodes } from "./setKeyCodes.js";

let inputCharactersOnKeys = (keyboard, lang, usualCharactersArr, flag) => {
  for (let i = 0; i < keyboard.children.length; i++) {
    let keyRow = keyboard.children[i];

    for (let y = 0; y < keyRow.children.length; y++) {
      let key = keyRow.children[y];
      let span = document.createElement("span");
      span.className = `keyboard__character keyboard__character_${lang}`;
      span.classList.add("keyboard__character_disable");
      span.innerHTML = usualCharactersArr[i][y];
      if (flag) setKeyCodes(key, usualCharactersArr[i][y]);
      if (usualCharactersArr[i][y] === "Shift") key.setAttribute("id", "shift");
      if (usualCharactersArr[i][y] === "CapsLock") key.setAttribute("id", "capsLock");
      if (usualCharactersArr[i][y] === "Alt") key.setAttribute("id", "alt");
      if (usualCharactersArr[i][y] === "Ctrl") key.setAttribute("id", "ctrl");
      key.append(span);
    }
  }

  setCoupleKeyCodes();
};

let inputShiftCharactersOnKeys = (neededKeyIndexesArr, shiftCharactersArr, allCharacters, lang) => {
  let keyIndexesArr = [...neededKeyIndexesArr];

  for (let i = 0; i < 13; i++) keyIndexesArr.push(i); //these values are by default for every lang

  keyIndexesArr = keyIndexesArr.sort((a, b) => a - b);

  keyIndexesArr.forEach((keyIndex) => {
    let currentCharacter = allCharacters[keyIndex];
    let parentKey = currentCharacter.parentElement;
    let span = document.createElement("span");
    span.className = `keyboard__shiftCharacter keyboard__shiftCharacter__${lang}`;
    span.classList.add("keyboard__shiftCharacter_disable");
    span.innerHTML = shiftCharactersArr[0];
    shiftCharactersArr.shift();
    parentKey.append(span);
  });
};

let createEngCharacters = (keyboard) => {
  let usualCharactersArr = [
    ["`", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "-", "=", "Backspace"],
    ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del"],
    ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
    ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "&#11165;", "Shift"],
    ["Ctrl", "Win", "Alt", "Space", "Alt", "&#11164;", "&#11167;", "&#11166;", "Ctrl"],
  ];

  inputCharactersOnKeys(keyboard, "eng", usualCharactersArr, true);
  // prettier-ignore
  let shiftCharactersArr = ["~","!","@","#","$","%","^","&","*","(",")","_","+","{","}","|",":","\"","<",">","?"];
  let allEngCharacters = keyboard.querySelectorAll(".keyboard__character_eng");

  let neededKeyIndexesArr = [25, 26, 27, 39, 40, 50, 51, 52]; // arr of indexes of keys for creation 'shift' characters
  inputShiftCharactersOnKeys(neededKeyIndexesArr, shiftCharactersArr, allEngCharacters, "eng");
};

let createRusCharacters = (keyboard) => {
  let usualCharactersArr = [
    ["ё", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "-", "=", "Backspace"],
    ["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Del"],
    ["CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter"],
    ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "/", "&#11165;", "Shift"],
    ["Ctrl", "Win", "Alt", "Space", "Alt", "&#11164;", "&#11167;", "&#11166;", "Ctrl"],
  ];

  inputCharactersOnKeys(keyboard, "rus", usualCharactersArr);
  // prettier-ignore
  let shiftCharactersArr = ["Ё","!","\"","№",";","%",":","?","*","(",")","_","+","/",","];
  let allRusCharacters = keyboard.querySelectorAll(".keyboard__character_rus");
  let neededKeyIndexesArr = [27, 52]; // arr of indexes of keys for creation 'shift' characters
  inputShiftCharactersOnKeys(neededKeyIndexesArr, shiftCharactersArr, allRusCharacters, "rus");
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

  createEngCharacters(keyboard);
  createRusCharacters(keyboard);
};

export default createKeys;
