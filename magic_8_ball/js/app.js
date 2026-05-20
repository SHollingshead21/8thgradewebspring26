function shake() {
  ask_question();
  reveal_fortune();
}

function ask_question() {
  // empty for now
}

function reveal_fortune() {
  const fortunes = get_fortunes();
  const fortune = select_fortune(fortunes);
  document.getElementById("fortune").textContent = fortune;
}

function get_fortunes() {
  return [
    "It is certain",
    "Reply hazy try again",
    "Don't count on it",
    "Most likely",
    "Cannot predict now",
    "Outlook good",
    "My sources say no",
    "Yes",
    "Ask again later"
  ];
}

function reveal_fortune() {
  const fortunes = get_fortunes();
  const fortune = select_fortune(fortunes);
  document.getElementById("fortune").textContent = fortune;
}

function select_fortune(fortunes) {
  return fortunes[0];
}