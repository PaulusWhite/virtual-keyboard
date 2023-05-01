let createBasicStructure = () => {
  let osValue = navigator.userAgentData.platform;
  let body = document.body;
  let mainContainer = document.createElement("main");
  mainContainer.className = "main";

  let heading = document.createElement("h1");
  heading.className = "heading";
  heading.innerHTML = "Virtual Keyboard";

  let textarea = document.createElement("textarea");
  textarea.className = "textarea";
  textarea.setAttribute("rows", 15);
  textarea.setAttribute("placeholder", "Type your text");
  textarea.setAttribute("autofocus", "");

  let keyboardPanel = document.createElement("div");
  keyboardPanel.className = "keyboard";

  let osInfo = document.createElement("p"); //operation system
  let shortcutInfo = document.createElement("p");
  osInfo.className = "osInfo";
  osInfo.innerHTML = `Keyboard is created in operating system ${osValue}`;
  shortcutInfo.innerHTML = "To change the language do press left Ctrl + left Alt at the same time";
  shortcutInfo.className = "shortcutInfo";

  mainContainer.append(heading, textarea, keyboardPanel, osInfo, shortcutInfo);

  body.prepend(mainContainer);
};

export default createBasicStructure;
