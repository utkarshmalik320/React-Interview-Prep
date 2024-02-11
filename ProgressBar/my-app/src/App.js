import { useEffect, useState } from "react";
import "./App.css";
import PorgressBar from "./components/PorgressBar";

export default  function App() {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 0.1);
    },20);
  },[]);

  return (
    <div className="App">
      <span>Progress Bar</span>
      <PorgressBar value={value} 
      onComplete= {() =>{ setSuccess(true);}}
      />
      <span>{success ? "Complete!" : "Loading..."}</span>
    </div>
  );
}

