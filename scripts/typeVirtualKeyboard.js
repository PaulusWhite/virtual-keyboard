let removeCharacter = (textarea, keyVlaue, textCursorIndex, textareaValueArr) => {
  let selectedText = window.getSelection().toString();
  let cursorOffset = selectedText.length ? 0 : 1;

  if (keyVlaue === "Backspace") {
    textareaValueArr.splice(textCursorIndex - cursorOffset, 1 + selectedText.length);
  } else textareaValueArr.splice(textCursorIndex, 1 + selectedText.length);

  let newTextareaValue = textareaValueArr.join("");
  textarea.value = "";
  textarea.value = newTextareaValue;

  if (keyVlaue === "Backspace") {
    textarea.setSelectionRange(textCursorIndex - cursorOffset, textCursorIndex - cursorOffset);
  } else textarea.setSelectionRange(textCursorIndex, textCursorIndex);
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
  let textCursorIndex = textarea.selectionStart;
  let textareaValueArr = textarea.value.split("");
  let simpleSpecialKeysObj = {
    Tab: "    ",
    Enter: "\n",
    Space: " ",
  };

  if (simpleSpecialKeysObj[keyValue]) {
    let currentCharacter = textareaValueArr[textCursorIndex - 1];
    if (currentCharacter) {
      textareaValueArr[textCursorIndex - 1] = currentCharacter + simpleSpecialKeysObj[keyValue];
      let newTextareaValue = textareaValueArr.join("");
      textarea.value = newTextareaValue;
      let finishTextCursorIndex = textCursorIndex + simpleSpecialKeysObj[keyValue].length;
      textarea.setSelectionRange(finishTextCursorIndex, finishTextCursorIndex);
    } else textarea.value += simpleSpecialKeysObj[keyValue];
  } else {
    if (keyValue === "Backspace") removeCharacter(textarea, keyValue, textCursorIndex, textareaValueArr);
    if (keyValue === "Del") removeCharacter(textarea, keyValue, textCursorIndex, textareaValueArr);
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
