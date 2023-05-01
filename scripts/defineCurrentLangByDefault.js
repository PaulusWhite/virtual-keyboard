let changeLang = (currentLang) => {
  let altLang = currentLang === "rus" ? "eng" : "rus";
  let allAltLangCharacters = document.querySelectorAll(`.keyboard__character_${altLang}`);

  allAltLangCharacters.forEach((character) => character.classList.add("keyboard__character_disable"));
};

let defineCurrentLangByDefault = (changeLangFlag) => {
  let currentLang = localStorage.getItem("virtKeyboardLang");

  if (currentLang === null) {
    currentLang = "eng";
    localStorage.setItem("virtKeyboardLang", currentLang);
  }

  let allCurrentLangCharacters = document.querySelectorAll(`.keyboard__character_${currentLang}`);
  allCurrentLangCharacters.forEach((character) => character.classList.remove("keyboard__character_disable"));

  if (changeLangFlag) changeLang(currentLang);
};

export default defineCurrentLangByDefault;
