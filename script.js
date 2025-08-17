function firstChar(text) {
  // Remove leading spaces
  text = text.trimStart();

  // Agar string khali ho gayi to return empty
  if (text.length === 0) {
    return "";
  }

  // Otherwise first character return
  return text[0];
}

// Do not change the code below
const text = prompt("Enter text:");  // <-- isko uncomment rakho
alert(firstChar(text));
