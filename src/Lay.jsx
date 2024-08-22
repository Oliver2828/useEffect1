import React, { useEffect, useState } from 'react'

function Lay() {
    let [holder, setHolder] = useState(null)

   useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(json => setHolder(json))
      .catch(err=>console.log("Error ooo"))
   },[])
    
  return (
    <>
         <div className='h-auto grid grid-cols-5 bg-orange-300 gap-3'>
     { 
     holder ?
      holder.map((cc)=>(
        <div className='bg-slate-700 text-white p-3'>
             <div className='h-[70%]'>
                 <img src={cc.image}  className='h-[180px] w-[100%]' />
             </div>
             <h1 className='h-[20%] bg-zinc-200 text-black text-ellipsis overflow-hidden whitespace-nowrap flex items-center'>Title:{cc.title}</h1>
             <p className='text-black h-[10%] text-[10px]bg-[white]'>price:${cc.price}</p>
        </div>
        )) : <p>Loading....wait small</p>
     }
   </div>
    </>
  )
}

export default Lay