import { btnMatrix } from "./matrixBtns";

const buttonNavHelper = (cmd: string, crd: number[]): number[] => {
  const x = btnMatrix.length - 1;
  switch (cmd) {
    case "ArrowUp":
      crd[0]--;
      if (crd[0] === 3) {
        crd[1]++;
      }
      break;
    case "ArrowDown":
      crd[0]++;
      if (crd[0] === 4 && crd[1] !== 0) {
        crd[1]--;
      }
      break;
    case "ArrowLeft":
      crd[1]--;
      if (crd[1] < 0) {
        if (crd[0] === 0) {
          return [x, btnMatrix[x].length - 1];
        }
        crd[0]--;
        crd[1] = btnMatrix[crd[0]].length - 1;
      }
      break;
    case "ArrowRight":
      crd[1]++;
      if (crd[1] > btnMatrix[crd[0]].length - 1) {
        crd[0]++;
        crd[1] = 0;
      }
      break;
  }

  if (crd[0] > x) {
    return [0, 0];
  }
  if (crd[0] < 0) {
    return [x, btnMatrix[x].length - 1];
  }
  if (crd[1] > btnMatrix[crd[0]].length - 1) {
    crd[1] = btnMatrix[crd[0]].length - 1;
  }

  return crd;
};
export default buttonNavHelper;
