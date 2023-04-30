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

// let clickCapslock = (keyboard) => {
//   let allKeyCharacters = keyboard.querySelectorAll(".keyboard__usualCharacter");

// };

let clickSpecialKeys = (textarea, keyValue, keyboard) => {
  let simpleSpecialKeysObj = {
    Tab: "\t",
    Enter: "\n",
    Space: " ",
  };

  if (simpleSpecialKeysObj[keyValue]) {
    textarea.value += simpleSpecialKeysObj[keyValue];
  } else {
    if (keyValue === "Backspace") removeCharacter(textarea, keyValue);
    if (keyValue === "Del") removeCharacter(textarea, keyValue);
    // if (keyValue === "CapsLock") clickCapslock(keyboard);
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

    let currentCharacter = currentKey.querySelector(
      ".keyboard__usualCharacter:not(.keyboard__usualCharacter_disable)"
    );

    if (currentCharacter.textContent.length === 1) {
      textarea.value += currentCharacter.textContent;
    } else {
      clickSpecialKeys(textarea, currentCharacter.textContent, keyboard);
    }
  });
};

export default typeVirtKeyboardCharacters;
