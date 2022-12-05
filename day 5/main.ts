const readFile = async () => {
  let cargo = [
    ["B", "Z", "T"],
    ["V", "H", "T", "D", "N"],
    ["B", "F", "M", "D"],
    ["T", "J", "G", "W", "V", "Q", "L"],
    ["W", "D", "G", "P", "V", "F", "Q", "M"],
    ["V", "Z", "Q", "G", "H", "F", "S"],
    ["Z", "S", "N", "R", "L", "T", "C", "W"],
    ["Z", "H", "W", "D", "J", "N", "R", "M"],
    ["M", "Q", "L", "F", "D", "S"],
  ];

  const text = await Deno.readTextFile("data.txt");
  let data = text.replace(/\r/g, "  ");
  data = data.split(/\n/g);

  data.forEach((line) => {
    line = line.trim();
    let lineArray = line.split(" ");
    const move = lineArray[1];
    const from = lineArray[3] - 1;
    const to = lineArray[5] - 1;

    moveCargo({ cargo, move, from, to });

    console.log("cargo =", cargo);

    /**
       Move the cargo
       [["Z", "N"], ["M", "C", "D"], ["P"]];
           [D]    
       [N] [C]    
       [Z] [M] [P]
        1   2   3 
       
     */
  });
};

function moveCargo({ cargo, move, from, to }: any) {
  for (let i = 0; i < move; i++) {
    let buffer = cargo[from][cargo[from].length - 1];

    cargo[from].pop();
    cargo[to].push(buffer);
  }
}

readFile();
