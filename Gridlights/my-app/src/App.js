import { useState } from 'react';
import './App.css';


function Cell ({filled, onClick , isDisabled, label}){
  return ( 
   <button
    type ='button'
    aria-label={label}
    disabled = {isDisabled}
    onclick = {onClick}
    className = {filled  ? "cell cell-activated " : "cell"}
  />
  )
}

export default  function App() {
  const[ order, setOrder ] = useState([])
  const [isdeactivated, setIsdeactivated] = useState(false)
  const config = [
    [1,1,1],
    [1,0,1],
    [1,1,1],
  ];

  const deactiateCells  = () =>{
    setIsdeactivated(true);
    const timer  =  setInterval(() => {
        setOrder((originalOrder) =>{
          const neworder = originalOrder.slice()
          neworder.pop();

          if(neworder.length === 0){
            clearInterval(timer)
            setIsdeactivated(false);
          }

          return neworder;
        })
    }, 300);
  };

  const activateCells = (index) =>{
        const neworder = [...order , index]
        setOrder(neworder)
       
   

        if(neworder.length === config.flat(1).filter(Boolean).length){
          deactiateCells();
        }
  };
  return (
    <div className="wrapper">
      <div 
      className ="grid" 
      style = {{
        gridTemplateColumns : `repeat(${config[0].length} , 1fr)`,
      }}>

        {config.flat(1).map((value, index )=>{
          return value ?  ( <Cell
          key = {index}
          label  = {`cell ${index}`}
          filled = {order.includes(index)}
          onclick = { () => {activateCells(index)}}
          isDisabled = {order.includes(index) || isdeactivated}
          />): (<span/>);
        })}
      </div>
    </div>
  );
}


