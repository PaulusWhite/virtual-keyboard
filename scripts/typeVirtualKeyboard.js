let removeCharacter = (textarea, keyVlaue) => {
  let textCursor = textarea.selectionStart;
  let textareaValueArr = textarea.value.split("");

  if (keyVlaue === "Backspace") {
    textareaValueArr.splice(textCursor - 1, 1);
  } else textareaValueArr.splice(textCursor, 1);

  let newTextareaValue = textareaValueArr.join("");
  textarea.value = "";
  textarea.value = newTextareaValue;
  textarea.setSelectionRange(textCursor, textCursor);
};

let clickCapslockKey = (keyboard, flag) => {
  //flag is needed here for script typePhysicalKeyboard.js only
  let capsLockKey = keyboard.querySelector("#capsLock");
  let allKeyCharacters = keyboard.querySelectorAll(".keyboard__character");

  allKeyCharacters.forEach((character) => {
    let characterValue = character.textContent;
    if (characterValue.length === 1) {
      if (capsLockKey.classList.contains("keyboard__key_active") || flag === "preventLowerCase") {
        character.textContent = characterValue.toLowerCase();
      } else {
        character.textContent = characterValue.toUpperCase();
      }
    }
  });

  if (flag === "falseClass" || flag === "preventLowerCase") return;
  capsLockKey.classList.toggle("keyboard__key_active");
};

let clickSpecialKeys = (textarea, keyValue, keyboard) => {
  let simpleSpecialKeysObj = {
    Tab: "    ",
    Enter: "\n",
    Space: " ",
  };

  if (simpleSpecialKeysObj[keyValue]) {
    textarea.value += simpleSpecialKeysObj[keyValue];
  } else {
    if (keyValue === "Backspace") removeCharacter(textarea, keyValue);
    if (keyValue === "Del") removeCharacter(textarea, keyValue);
    if (keyValue === "CapsLock") clickCapslockKey(keyboard);
    //There are no events for such buttons like Shift, Ctrl, Win, Alt here
  }
};

let typeVirtualKeyboard = () => {
  let keyboard = document.querySelector(".keyboard");
  let textarea = document.querySelector(".textarea");

  document.addEventListener("mousedown", (event) => {
    !event.target.closest(".textarea") && event.preventDefault();
  });

  keyboard.addEventListener("click", (event) => {
    let currentKey = event.target.closest(".keyboard__key");

    if (!currentKey) return;

    let currentCharacter = currentKey.querySelector(".keyboard__character:not(.keyboard__character_disable)");

    if (currentCharacter.textContent.length === 1) {
      textarea.value += currentCharacter.textContent;
    } else {
      clickSpecialKeys(textarea, currentCharacter.textContent, keyboard);
    }
  });
};

export { typeVirtualKeyboard, clickCapslockKey, clickSpecialKeys };
