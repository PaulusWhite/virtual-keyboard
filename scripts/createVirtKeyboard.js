import createBasicStructure from "./createBasicStructure.js";
import createKeys from "./createKeys.js";
import defineCurrentLang from "./defineCurrentLang.js";

let createVirtKeyboard = () => {
  createBasicStructure();
  createKeys();
  defineCurrentLang();
};

export default createVirtKeyboard;
