const readFile = async () => {
  const text = await Deno.readTextFile("data.txt");
  let data = text.replace(/\r\n/g, " ");
  data = data.split(" ");

  let marks = 0;

  data.forEach((element) => {
    element = element.trim();
    let half = Math.floor(element.length / 2);
    let leftRucksack = element.substr(0, half);
    let rightRucksack = element.substr(half);

    console.log(leftRucksack, rightRucksack);

    let repeatedWord: string[] = [];

    for (let i in leftRucksack) {
      rightRucksack.includes(leftRucksack[i])
        ? repeatedWord.push(leftRucksack[i])
        : false;
    }
    console.log(repeatedWord);
    console.log("Char  ", repeatedWord[0].charCodeAt(0));
    if (repeatedWord[0].charCodeAt(0) > 96) {
      marks += Number(repeatedWord[0].charCodeAt(0)) - 96;
    } else {
      marks += Number(repeatedWord[0].charCodeAt(0)) - 38;
    }
  });
  console.log(marks);
};

readFile();
