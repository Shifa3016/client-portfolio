import React from 'react'

const Heading = (props) => {
  return (
    <div>
      <div className="flex gap-2">
        <img className="w-" src="icons/summary.svg" alt="" />
        <h1 className="font-bold text-3xl text-[#013571]">{props.title}</h1>
      </div>
    </div>
  )
}

export default Heading
