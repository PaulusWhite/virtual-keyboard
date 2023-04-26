let defineCurrentLang = () => {
  let currentLang = localStorage.getItem("virtKeyboardLang");

  if (currentLang === null) {
    currentLang = "eng";
    localStorage.setItem("virtKeyboardLang", currentLang);
  }

  let allEngCharacters = document.querySelectorAll(`.keyboard__usualCharacter_${currentLang}`);
  allEngCharacters.forEach((character) => character.classList.remove("keyboard__usualCharacter_disable"));
};

export default defineCurrentLang;
