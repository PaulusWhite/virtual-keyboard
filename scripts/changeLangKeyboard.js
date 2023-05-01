import defineCurrentLangByDefault from "./defineCurrentLangByDefault.js";

let changeLangValue = () => {
  let currentLang = localStorage.getItem("virtKeyboardLang");
  let newCurrentLang = currentLang === "eng" ? "rus" : "eng";

  localStorage.setItem("virtKeyboardLang", newCurrentLang);
};

let isKeysPressed = (pressedKeys) => {
  return (
    (pressedKeys["ControlLeft"] || pressedKeys["ControlRight"]) &&
    (pressedKeys["AltLeft"] || pressedKeys["AltRight"])
  );
};

let changeLangKeyboard = () => {
  let pressedKeys = {};

  document.addEventListener("keydown", (event) => {
    let code = event.code;

    if (isKeysPressed(pressedKeys)) return;

    if (code === "ControlLeft" || code === "ControlRight" || code === "AltLeft" || code === "AltRight") {
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

export default changeLangKeyboard;
