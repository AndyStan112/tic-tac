export class Cell {

  constructor(_id,_value){
    this.value=_value;
    this.color=null;
    this.mark=null;
    this.id=_id;
  }
  
  set (_value){this.value=_value}
}