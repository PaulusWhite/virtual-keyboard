import createBasicStructure from "./createBasicStructure.js";
import createKeys from "./createKeys.js";
import defineCurrentLangByDefault from "./defineCurrentLangByDefault.js";
import { typeVirtualKeyboard } from "./typeVirtualKeyboard.js";
import typePhysicalKeyboard from "./typePhysicalKeyboard.js";
import { clickShiftKey } from "./clickShiftKey.js";
import changeKeyboardLang from "./changeKeyboardLang.js";

let createVirtKeyboard = () => {
  createBasicStructure();
  createKeys();
  defineCurrentLangByDefault();
  typeVirtualKeyboard();
  typePhysicalKeyboard();
  clickShiftKey();
  changeKeyboardLang();
};

export default createVirtKeyboard;
