function resizeText(multiplier) {
  if (document.body.style.fontSize == "5px") {
    document.body.style.fontSize = "10px";
  }
  document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 0.2) + "px";
}
