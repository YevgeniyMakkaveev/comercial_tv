import { btnMatrix } from "./matrixBtns";

export const findBtnCoordinate =(val:string):number[]=>{
 const y = btnMatrix.length
 let found=[0,0];
 for(let i=0; i<y;i++){
  for(let j=0; j<btnMatrix[i].length;j++){
    if(val===btnMatrix[i][j]) found=[i,j]
  }
 }
  return found;
}

export const getBtnByCoordinate = (crd: number[] | string): string => {
    if (typeof crd === "string") return crd;
    const res = btnMatrix[crd[0]][crd[1]];
    return res;
  };