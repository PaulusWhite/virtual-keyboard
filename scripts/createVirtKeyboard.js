import createBasicStructure from "./createBasicStructure.js";
import createKeys from "./createKeys.js";
import defineCurrentLangByDefault from "./defineCurrentLangByDefault.js";
import { typeVirtualKeyboard } from "./typeVirtualKeyboard.js";
import typePhysicalKeyboard from "./typePhysicalKeyboard.js";
import { clickShiftKey } from "./clickShiftKey.js";
import changeLangKeyboard from "./changeLangKeyboard.js";

let createVirtKeyboard = () => {
  createBasicStructure();
  createKeys();
  defineCurrentLangByDefault();
  typeVirtualKeyboard();
  typePhysicalKeyboard();
  clickShiftKey();
  changeLangKeyboard();
};

export default createVirtKeyboard;
