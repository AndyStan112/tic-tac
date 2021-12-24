import logo from './logo.svg';
import './App.css';
import {matrix} from './auxiliary.js'
//import {Cell} from "./classes/cell.js"
function Cell(props){
  let {cell}=props
  return (
    <div className={cell.id.toString()}>{cell.value}</div>
  )
}
function Grid(props){
  let {grid} =props;
  let display=[]
  grid.forEach(row => {
    row.forEach(cell => {
      display.push((<Cell cell={cell} key={cell.id}/>))
    })
  })
  return (display)
}

function App() {
  let rows=3;
  let columns=3;
  let default_value=4;
  return (
    <div className="App">
     <p>hi</p>
     <Grid grid={matrix(rows,columns,default_value)}/>
    </div>
  );
}

export default App;
