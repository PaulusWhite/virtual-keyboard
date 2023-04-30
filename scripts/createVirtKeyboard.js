import createBasicStructure from "./createBasicStructure.js";
import createKeys from "./createKeys.js";
import defineCurrentLangByDefault from "./defineCurrentLangByDefault.js";
import { typeVirtKeyboardCharacters } from "./typeVirtKeyboardCharacters.js";

let createVirtKeyboard = () => {
  createBasicStructure();
  createKeys();
  defineCurrentLangByDefault();
  typeVirtKeyboardCharacters();
};

export default createVirtKeyboard;
