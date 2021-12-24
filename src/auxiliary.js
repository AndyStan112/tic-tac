import {Cell} from "./classes/cell.js"
import {Grid} from "./classes/grid.js"
export function array(n,id,default_value){
    let arr=[]
    for(let i=0;i<n;i++)
        arr.push(new Cell(id+i,default_value))
        return arr;
}
export function matrix(n,m,default_value){
    let mat=[]
    for(let i=0;i<n;i++)
       mat.push(array(m,i*n,default_value))
  return mat;
}