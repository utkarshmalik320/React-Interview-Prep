import React from 'react'

const Bro = ({value , data , handlesubmit, handlechange }) => {
  return (
    <>
    <input 
    type="text" 
    placeholder='enter value'
    value={value}
    onChange={handlechange}
    required
    />
    <button onClick={handlesubmit}>Submit</button>
    {data && <div>{data?.title}</div>}
    </>
  )
}

export default Bro