const readFile = async () => {
  const text = await Deno.readTextFile("data.txt");
  let data = text.replace(/\r\n/g, " ");
  data = data.split(" ");

  let marks = 0;

  for (let i = 0; i < data.length; i += 3) {
    let group: [][] = [];

    for (let j = i; j < i + 3; j++) {
      group.push(data[j]);
    }

    let sameElement = findSameElement(group[0], group[1], group[2]);

    console.log("Char  ", sameElement.charCodeAt(0));
    if (sameElement.charCodeAt(0) > 96) {
      marks += Number(sameElement.charCodeAt(0)) - 96;
    } else {
      marks += Number(sameElement.charCodeAt(0)) - 38;
    }
  }

  console.log(marks);
};

function findSameElement(str1: any, str2: any, str3: any): string {
  for (let i in str1) {
    if (str2.includes(str1[i]) && str3.includes(str1[i])) {
      return str1[i];
    }
  }
  return "";
}

readFile();
