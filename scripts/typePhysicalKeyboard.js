import { clickCapslockKey, clickSpecialKeys } from "./typeVirtualKeyboard.js";
import { displayShiftCharacters } from "./clickShiftKey.js";

let toggleKeyClass = (keyCode) => {
  if (keyCode === "CapsLock") return;
  let pressedKey = document.querySelector(`.keyboard__key[data-keycode=${keyCode}]`);
  pressedKey.classList.toggle("keyboard__key_active");
};

let typePhysicalKeyboard = () => {
  let keyboard = document.querySelector(".keyboard");
  let textarea = document.querySelector(".textarea");

  let pressedKeys = {};

  document.addEventListener("keydown", (event) => {
    let code = event.code;

    if (code === "Tab") {
      event.preventDefault();
      clickSpecialKeys(textarea, code);
    }

    if (pressedKeys[event.code]) return;

    if (code === "ShiftLeft" || code === "ShiftRight") {
      displayShiftCharacters(keyboard);
      clickCapslockKey(keyboard, "falseClass");
    }
    if (event.code === "CapsLock") clickCapslockKey(keyboard);

    toggleKeyClass(event.code);

    pressedKeys[event.code] = true;
  });

  document.addEventListener("keyup", (event) => {
    let code = event.code;

    toggleKeyClass(code);

    if (code === "ShiftLeft" || code === "ShiftRight") {
      clickCapslockKey(keyboard, "preventLowerCase");
    }

    delete pressedKeys[event.code];
  });
};

export default typePhysicalKeyboard;
