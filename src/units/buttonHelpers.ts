export const  btnMatrix = [
 ["x"],
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  [ "0","D"],
  ["confirm"]
];
export const numBtns = ["1", "2", "3","4", "5", "6","7", "8", "9"]

const buttonNavHelper = (
  cmd: string,
  crd: number[] 
): number[]  => {
const x =  btnMatrix.length - 1;
  switch (cmd) {
    case "ArrowUp":
      crd[0]--;
      break;
    case "ArrowDown":
      crd[0]++;
      break;
    case "ArrowLeft":
      crd[1]--;
      break;
    case "ArrowRight":
      crd[1]++;
      break;
  }
  
  if (crd[0] > x) {
   return [0,0]
  }
    if (crd[0] < 0) {
   return [x,btnMatrix[x].length-1]
  }
  if (crd[1] >  btnMatrix[crd[0]].length-1&&cmd==="ArrowRight") {
   console.log(btnMatrix[0].length)
   console.log(btnMatrix[crd[0]].length)
    crd[0]++;
    crd[1]=0
  }
  if (crd[1] < 0) {
    crd[0]--;
    crd[1] = btnMatrix[crd[0]].length-1;
  }
  if (crd[0] < 0 ) {
    return [0,0];
  }
  if(crd[0] > x)
  return [btnMatrix.length-1, 0]
  if (crd[1] > btnMatrix[crd[0]].length-1)
  crd[1]=btnMatrix[crd[0]].length-1
  console.log(crd);
  return crd;
};
export default buttonNavHelper;

