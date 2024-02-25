import "./App.css";
import React, { useEffect, useState } from "react";
import Bro from "./components/Bro";
function App() {
  const [page, setPage] = useState([1]);
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetchposts();
  });

  const fetchposts = async () => {
    const res = await fetch(`'https://dummyjson.com/products/${page}`);
    const data = res.json();
    setPosts(data);
  };

  const handlechange = (event) => {
    setPage(event.target.value);
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    fetchposts();
  };


return (
  <div>
    <Bro handlechange = {handlechange} handlesubmit={handlesubmit} data={posts} 
    value={page}/>
  </div>
);
}

export default App;


