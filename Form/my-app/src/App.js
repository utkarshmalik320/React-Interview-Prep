import React from 'react'
import { useState } from 'react'

const App = () => {

  const [formdata , setFormData] = useState({
    name : '',
    email : ''
    // number: '',
  })

  const handlechange = (e) =>{
    const{name, email} = e.target;
    // setFormData((tempstate) => {
    //     return {...tempstate, [name] : email};
    // })
    setFormData(name, email);
    console.log(setFormData)
  }
  const handlesubmit  =(e) =>{
    e.preventDefault()
    console.log("formdata" , formdata)
    fetch('https://jsonplaceholder.typicode.com/posts' , {
      method : 'POST',
      headers : {'content-type': 'application/json'},
      body : JSON.stringify({
        title : formdata.name,
        email: formdata.email
      })
    })

  }
  return (
    <form onSubmit={handlesubmit}> 
      <div>
        <label>Name: </label>
        <input type="text"
        placeholder='enter your name'
        onChange={handlechange}
        name='name'
        value={formdata.name}
         />
      </div>
         <br/>
         <br/>
         <div>
         <label>Email: </label>
        <input type="email"
        placeholder='enter your email'
        onChange={handlechange}
        name='email'
        value={formdata.email}
         />

         </div>
       
          <br/>
          <br/>
          {/* <label>Name: </label>
        <input type="number"
        placeholder='enter your number'
        onChange={handlechange}
        name='number'
        value={formdata.number}
         />
          <br/>
          <br/> */}

        <button>Submit</button>
    </form>
  )
}

export default App
