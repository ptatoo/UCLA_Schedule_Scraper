import React from 'react'

const Test = () => {
    const testing = async () =>{
        const res = await fetch(`${import.meta.env.VITE_API_URL}/protected`,{
            method: "GET",
            credentials: "include"
        });
        const data = await res.json();
        console.log(data);   
    }
    return (
    <button
    onClick={testing

    }>test</button>
  )
}

export default Test