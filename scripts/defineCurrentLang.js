let defineCurrentLang = () => {
  let currentLang = localStorage.getItem("virtKeyboardLang");

  if (currentLang === null) {
    currentLang = "eng";
    localStorage.setItem("virtKeyboardLang", currentLang);
  }

  let allEngCharacters = document.querySelectorAll(`.keyboard__character_${currentLang}`);
  allEngCharacters.forEach((character) => character.classList.remove("keyboard__character_disable"));
};

export default defineCurrentLang;
