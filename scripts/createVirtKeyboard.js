import createBasicStructure from "./createBasicStructure.js";
import createKeys from "./createKeys.js";
import defineCurrentLangByDefault from "./defineCurrentLangByDefault.js";
import { typeVirtKeyboardCharacters } from "./typeVirtKeyboardCharacters.js";
import clickShiftKey from "./clickShiftKey.js";

let createVirtKeyboard = () => {
  createBasicStructure();
  createKeys();
  defineCurrentLangByDefault();
  typeVirtKeyboardCharacters();
  clickShiftKey();
};

export default createVirtKeyboard;
