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

let clickCapslockKey = (keyboard, currentCharacter) => {
  let capsLockKey = currentCharacter.closest(".keyboard__key");
  let allKeyCharacters = keyboard.querySelectorAll(".keyboard__character");

  allKeyCharacters.forEach((character) => {
    let characterValue = character.textContent;
    if (characterValue.length === 1) {
      if (capsLockKey.classList.contains("keyboard__key_active")) {
        character.textContent = characterValue.toLowerCase();
      } else {
        character.textContent = characterValue.toUpperCase();
      }
    }
  });

  capsLockKey.classList.toggle("keyboard__key_active");
};

let clickSpecialKeys = (textarea, currentCharacter, keyboard) => {
  let keyValue = currentCharacter.textContent;

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
    if (keyValue === "CapsLock") clickCapslockKey(keyboard, currentCharacter);
    //There are no events for such buttons like Shift, Ctrl, Win, Alt here
  }
};

let typeVirtKeyboardCharacters = () => {
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
      clickSpecialKeys(textarea, currentCharacter, keyboard);
    }
  });
};

export default typeVirtKeyboardCharacters;
