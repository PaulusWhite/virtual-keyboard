import createBasicStructure from "./createBasicStructure.js";
import createKeys from "./createKeys.js";
import defineCurrentLangByDefault from "./defineCurrentLangByDefault.js";
import { typeVirtualKeyboard } from "./typeVirtualKeyboard.js";
import clickShiftKey from "./clickShiftKey.js";

let createVirtKeyboard = () => {
  createBasicStructure();
  createKeys();
  defineCurrentLangByDefault();
  typeVirtualKeyboard();
  clickShiftKey();
};

export default createVirtKeyboard;
