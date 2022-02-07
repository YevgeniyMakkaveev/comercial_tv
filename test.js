const matrix = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["D", "0"],
];

const btnHelp = (cmd, crd) => {
  if (typeof crd == "string") {
    return "x";
  }

  switch (cmd) {
    case "ArrowUp":
      crd[0]++;
      break;
    case "ArrowDown":
      crd[0]--;
      break;
    case "ArrowLeft":
      crd[1]--;
      break;
    case "ArrowRight":
      crd[1]++;
      break;
  }
  const x = matrix.length - 1;
  if (crd[0] > x) {
    console.log("x");
    return "x";
  }
  if (crd[1] > matrix[crd].length) {
    crd[0]++;
    crd[1] = 0;
  }
  if (crd[1] < 0) {
    crd[0]--;
    crd[1] = 2;
  }
  if (crd[0] < 0 || crd[0] > x) {
    return "x";
  }
  console.log(crd);
  return crd;
};

btnHelp("ArrowUp", [3, 1]);
btnHelp("ArrowRight", [1, 2]);
btnHelp("ArrowLeft", [2, 0]);

for (let i = 1; i < 10; i++) {
  console.log(i);
}
