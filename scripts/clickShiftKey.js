import { clickCapslockKey } from "./typeVirtualKeyboard.js";

let displayShiftCharacters = (keyboard) => {
  let currentLang = localStorage.getItem("virtKeyboardLang");
  let allShiftCharacters = keyboard.querySelectorAll(`.keyboard__shiftCharacter__${currentLang}`);

  allShiftCharacters.forEach((shiftCharacter) => {
    shiftCharacter.classList.toggle("keyboard__shiftCharacter_disable");
    let usualCharacter = shiftCharacter.previousElementSibling;
    usualCharacter.classList.toggle("keyboard__character_disable");
  });
};

let clickShiftKey = () => {
  let shiftKeys = document.querySelectorAll("#shift");
  let keyboard = document.querySelector(".keyboard");

  shiftKeys.forEach((shiftKey) => {
    shiftKey.addEventListener("mousedown", () => {
      clickCapslockKey(keyboard);
      displayShiftCharacters(keyboard);
    });

    shiftKey.addEventListener("mouseup", () => {
      clickCapslockKey(keyboard);
      displayShiftCharacters(keyboard);
    });
  });
};

export default clickShiftKey;
