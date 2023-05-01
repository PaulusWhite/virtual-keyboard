import defineCurrentLangByDefault from "./defineCurrentLangByDefault.js";

let changeLangValue = () => {
  let currentLang = localStorage.getItem("virtKeyboardLang");
  let newCurrentLang = currentLang === "eng" ? "rus" : "eng";

  localStorage.setItem("virtKeyboardLang", newCurrentLang);
};

let isKeysPressed = (pressedKeys) => {
  return pressedKeys["ControlLeft"] && pressedKeys["AltLeft"];
};

let isShiftKeyPressed = () => {
  let shiftKeys = document.querySelectorAll("#shift");
  let isAnyShiftKeyPressed = false;
  shiftKeys.forEach((shiftKey) => {
    if (shiftKey.classList.contains("keyboard__key_active")) isAnyShiftKeyPressed = true;
  });

  return isAnyShiftKeyPressed;
};

let changeKeyboardLang = () => {
  let pressedKeys = {};

  document.addEventListener("keydown", (event) => {
    let code = event.code;

    if (isKeysPressed(pressedKeys) || isShiftKeyPressed()) return;

    if (code === "ControlLeft" || code === "AltLeft") {
      pressedKeys[code] = true;
    }

    if (isKeysPressed(pressedKeys)) {
      changeLangValue();
      defineCurrentLangByDefault(true);
      return;
    }
  });

  document.addEventListener("keyup", () => {
    pressedKeys = {};
  });
};

export default changeKeyboardLang;
