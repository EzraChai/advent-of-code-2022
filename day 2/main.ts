const readFile = async () => {
  const text = await Deno.readTextFile("data.txt");
  let data = text.replace(/\n/g, " ");
  data = data.replaceAll("A", "1");
  data = data.replaceAll("B", "2");
  data = data.replaceAll("C", "3");

  data = data.replaceAll("X", "1");
  data = data.replaceAll("Y", "2");
  data = data.replaceAll("Z", "3");

  data = data.split(/\r/g);
  console.log("initial data", { data });

  let totalScore = 0;
  for (let i = 0; i < data.length; i++) {
    let score = 0;

    data[i] = data[i].trim();
    let game = data[i].split(" ");
    if (game[0] == game[1]) {
      score = 3 + Number(game[1]);
      console.log("score", score);

      totalScore += score;
    } else {
      if (game[0] === "1") {
        /**
         * A,X = Rock = 1
         * B,Y = Paper = 2
         * C,Z = Scisors = 3
         */
        if (game[1] === "2") {
          score = 6 + Number(game[1]);
        } else if (game[1] === "3") {
          score = Number(game[1]);
        }
      }
      if (game[0] === "2") {
        if (game[1] === "1") {
          score = Number(game[1]);
        } else if (game[1] === "3") {
          score = 6 + Number(game[1]);
        }
      }
      if (game[0] === "3") {
        if (game[1] === "2") {
          score = Number(game[1]);
        } else if (game[1] === "1") {
          score = 6 + Number(game[1]);
        }
      }
      totalScore += score;
      console.log("score", score);
    }
  }

  console.log(totalScore);
};
readFile();
