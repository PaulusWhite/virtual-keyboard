import createBasicStructure from "./createBasicStructure.js";
import createKeys from "./createKeys.js";
import defineCurrentLang from "./defineCurrentLang.js";
import typeVirtKeyboardCharacters from "./typeVirtKeyboardCharacters.js";

let createVirtKeyboard = () => {
  createBasicStructure();
  createKeys();
  defineCurrentLang();
  typeVirtKeyboardCharacters();
};

export default createVirtKeyboard;
