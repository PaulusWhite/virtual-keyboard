import defineCurrentLangByDefault from "./defineCurrentLangByDefault.js";

let changeLangValue = () => {
  let currentLang = localStorage.getItem("virtKeyboardLang");
  let newCurrentLang = currentLang === "eng" ? "rus" : "eng";

  localStorage.setItem("virtKeyboardLang", newCurrentLang);
};

let changeLangKeyboard = () => {
  let pressedKeys = {};

  document.addEventListener("keydown", (event) => {
    let code = event.code;

    if (
      (pressedKeys["ControlLeft"] || pressedKeys["ControlRight"]) &&
      (pressedKeys["AltLeft"] || pressedKeys["AltRight"])
    ) {
      return;
    }

    if (code === "ControlLeft" || code === "ControlRight" || code === "AltLeft" || code === "AltRight") {
      pressedKeys[code] = true;
    }

    if (
      (pressedKeys["ControlLeft"] || pressedKeys["ControlRight"]) &&
      (pressedKeys["AltLeft"] || pressedKeys["AltRight"])
    ) {
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
