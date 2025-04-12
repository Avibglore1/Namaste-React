import React from 'react'

function Shimmer() {
  return (
    <div className='flex flex-wrap  gap-4 mt-4'>
        <div className='w-48 h-32 p-3 m-4 bg-slate-200'>card1</div>
        <div className='w-48 h-32 p-3 m-4 bg-slate-200'>card2</div>
        <div className='w-48 h-32 p-3 m-4 bg-slate-200'></div>
        <div className='w-48 h-32 p-3 m-4 bg-slate-200'></div>
        <div className='w-48 h-32 p-3 m-4 bg-slate-200'></div>
        <div className='w-48 h-32 p-3 m-4 bg-slate-200'></div>
        <div className='w-48 h-32'></div>
    </div>
  )
}

export default Shimmer