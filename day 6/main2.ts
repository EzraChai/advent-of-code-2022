//  bvwbjplbgvbhsrlpgdmjqwftvncz

const readFile = async () => {
  const text = await Deno.readTextFile("data.txt");
  let data = text.split("");
  let characters: any = [];

  for (let index = 0; index < 14; index++) {
    characters.push(data[index]);
  }

  for (let i = 0; i < data.length; i++) {
    if (checkNumber(characters)) {
      console.log(characters[3], 14 + i);
      return;
    } else {
      characters.shift();
      characters.push(data[14 + i]);
      // console.log(data[4 + i]);
    }
  }
};

function checkNumber(array) {
  let found = array.some((element, index) => {
    return array.indexOf(element) !== index;
  });

  if (found) {
    return false;
  }
  return true;
}

readFile();
