const readFile = async () => {
  const text = await Deno.readTextFile("data.txt");
  let data = text.replace(/\r\n/g, " ");
  data = data.split("  ");
  let arrayTotalNum: number[] = [];
  for (let i = 0; i < data.length; i++) {
    let totalNumber = 0;
    let number = data[i].split(" ");
    for (let j = 0; j < number.length; j++) {
      totalNumber += Number(number[j]);
    }

    arrayTotalNum.push(totalNumber);
  }

  let highestNumber = [0, 0, 0];
  for (let q = 0; q < highestNumber.length; q++) {
    let temp = 0;
    let indexNum: number = 0;
    arrayTotalNum.forEach((element, index) => {
      if (temp < element) {
        temp = element;
        indexNum = index;
      }
    });
    highestNumber[q] = temp;

    delete arrayTotalNum[indexNum];
  }
  console.log("highestNumber = ", highestNumber);
};

readFile();
