function canPlay() {
  const personName = "Paul";
  if (true) {
    personName += " plays football"; // Argh! personName is not defined
  }
  console.log(personName);
}

canPlay();
