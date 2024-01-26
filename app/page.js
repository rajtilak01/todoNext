 import React from 'react'
 
 const page = () => {
   return (
    <>
     <h1 className='bg-black text-white p-5 text-2xl font-bold text-center'>TodoList</h1>
     <form>
      <input className='text-2xl border-2 border-zinc-800 m-5 px-4 py-2' placeholder='Enter your Task here'/>
      <input className='text-2xl border-2 border-zinc-800 m-5 px-4 py-2' placeholder='Enter your Description here'/>
      <button className='bg-black text-white px-4 py-2 text-2xl'>Add Task</button>
     </form>
    </>
   )
 }
 
 export default page