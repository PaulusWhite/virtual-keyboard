let setCoupleKeyCodes = () => {
  let shiftKeys = document.querySelectorAll("#shift");
  let altKeys = document.querySelectorAll("#alt");
  let ctrlKeys = document.querySelectorAll("#ctrl");

  shiftKeys[0].setAttribute("data-keycode", "ShiftLeft");
  shiftKeys[1].setAttribute("data-keycode", "ShiftRight");
  altKeys[0].setAttribute("data-keycode", "AltLeft");
  altKeys[1].setAttribute("data-keycode", "AltRight");
  ctrlKeys[0].setAttribute("data-keycode", "ControlLeft");
  ctrlKeys[1].setAttribute("data-keycode", "ControlRight");
};

let setKeyCodes = (key, characterValue) => {
  let specialCodes = {
    "`": "Backquote",
    "-": "Minus",
    "=": "Equal",
    Backspace: "Backspace",
    Tab: "Tab",
    "[": "BracketLeft",
    "]": "BracketRight",
    "\\": "Backslash",
    Del: "Delete",
    CapsLock: "CapsLock",
    ";": "Semicolon",
    "'": "Quote",
    Enter: "Enter",
    ",": "Comma",
    ".": "Period",
    "/": "Slash",
    Win: "MetaLeft",
    Space: "Space",
    "&#11165;": "ArrowUp",
    "&#11164;": "ArrowLeft",
    "&#11167;": "ArrowDown",
    "&#11166;": "ArrowRight",
  };

  if (characterValue === "`") return key.setAttribute("data-keycode", "Backquote");
  if (Number.isInteger(+characterValue)) return key.setAttribute("data-keycode", `Digit${characterValue}`);
  if (characterValue.length === 1 && characterValue.match(/[a-z]/i)) {
    return key.setAttribute("data-keycode", `Key${characterValue.toUpperCase()}`);
  }

  return key.setAttribute("data-keycode", specialCodes[characterValue]);
};

export { setKeyCodes, setCoupleKeyCodes };
