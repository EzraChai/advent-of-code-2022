const readFile = async () => {
  const text = await Deno.readTextFile("data.txt");
  let data = text.replace(/\n/g, " ");
  data = data.replaceAll("A", "1");
  data = data.replaceAll("B", "2");
  data = data.replaceAll("C", "3");

  data = data.split(/\r/g);

  let totalScore = 0;
  for (let i = 0; i < data.length; i++) {
    let score = 0;

    data[i] = data[i].trim();
    let game = data[i].split(" ");

    /**
     * if X then lose
     * if Y then draw
     * if Z then win
     */
    if (game[0] === "1") {
      /**
       * A = Rock = 1
       * B = Paper = 2
       * C = Scisors = 3
       */
      if (game[1] === "X") {
        score = 3;
      } else if (game[1] === "Y") {
        score = 3 + Number(game[0]);
      } else if (game[1] === "Z") {
        score = 6 + 2;
      }
    }
    if (game[0] === "2") {
      if (game[1] === "X") {
        score = 1;
      } else if (game[1] === "Y") {
        score = 3 + Number(game[0]);
      } else if (game[1] === "Z") {
        score = 6 + 3;
      }
    }
    if (game[0] === "3") {
      if (game[1] === "X") {
        score = 2;
      } else if (game[1] === "Y") {
        score = 3 + Number(game[0]);
      } else if (game[1] === "Z") {
        score = 6 + 1;
      }
    }
    totalScore += score;
    console.log("score", score);
  }
  console.log(totalScore);
};

readFile();
