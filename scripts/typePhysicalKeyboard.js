import { clickCapslockKey, clickSpecialKeys, insertTextCharacter } from "./typeVirtualKeyboard.js";
import { displayShiftCharacters } from "./clickShiftKey.js";

let toggleKeyClass = (keyCode) => {
  if (keyCode === "CapsLock") return;
  let pressedKey = document.querySelector(`.keyboard__key[data-keycode=${keyCode}]`);
  if (!pressedKey) return; //this is for non virtual keyboard keys
  pressedKey.classList.toggle("keyboard__key_active");
};

let disableKeys = () => {
  //this function is needed for removing active class from the keys after
  //Alt + Tab and Shift + Alt shortcuts of the computer
  let leftCtrlKey = document.querySelector(".keyboard__key[data-keycode=ControlLeft]");
  let tabKey = document.querySelector(".keyboard__key[data-keycode=Tab]");
  leftCtrlKey.classList.remove("keyboard__key_active");
  tabKey.classList.remove("keyboard__key_active");
};

let typePhysicalKeyboard = () => {
  let keyboard = document.querySelector(".keyboard");
  let textarea = document.querySelector(".textarea");
  let pressedKeys = {};

  document.addEventListener("keydown", (event) => {
    event.preventDefault();
    let code = event.code;
    let key = document.querySelector(`.keyboard__key[data-keycode=${code}]`);

    if (!key) return; //this is for non virtual keyboard keys

    let keyCharacter = key.querySelector("span:not(.keyboard__character_disable, .keyboard__shiftCharacter_disable)");
    let insertedValue = keyCharacter.textContent;
    let textCursorIndex = textarea.selectionStart;
    let textareaValueArr = textarea.value.split("");

    if (
      code === "Tab" ||
      code === "Enter" ||
      code === "Space" ||
      code === "Delete" ||
      code === "Backspace" ||
      code === "CapsLock"
    ) {
      clickSpecialKeys(textarea, code, keyboard, textCursorIndex, textareaValueArr);
    }

    if (pressedKeys[event.code]) return;

    if (code === "ShiftLeft" || code === "ShiftRight") {
      displayShiftCharacters(keyboard);
      clickCapslockKey(keyboard, "falseClass");
    }

    if (insertedValue.length === 1 && insertedValue !== " ")
      insertTextCharacter(textarea, textareaValueArr, textCursorIndex, insertedValue);

    toggleKeyClass(event.code);

    pressedKeys[event.code] = true;
  });

  document.addEventListener("keyup", (event) => {
    let code = event.code;

    toggleKeyClass(code);
    disableKeys();

    if (code === "ShiftLeft" || code === "ShiftRight") {
      displayShiftCharacters(keyboard);
      clickCapslockKey(keyboard, "preventLowerCase");
    }

    delete pressedKeys[event.code];
  });
};

export default typePhysicalKeyboard;
