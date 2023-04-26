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

  let keyboardPanel = document.createElement("div");
  keyboardPanel.className = "keyboard";

  let osInfo = document.createElement("p"); //operation system
  osInfo.className = "osInfo";
  osInfo.innerHTML = `Keyboard is created in operating system ${osValue}`;

  mainContainer.append(heading, textarea, keyboardPanel, osInfo);

  body.prepend(mainContainer);
};

export default createBasicStructure;
