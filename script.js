function textAreaAdjust(element) {
  element.style.height = "1px";
  element.style.height = element.scrollHeight + "px";
}

targets = document.querySelectorAll("textarea");
targets.forEach((element) => {
  element.style.height = "100px";
});
