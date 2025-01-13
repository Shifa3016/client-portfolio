import React from 'react'

const Bullets = ({ title, icon = 'icons/arrow2.svg' }) => {
  return (
    <div>
      <div className='flex gap-1'>
                <img className='self-start' src={icon} alt="no icon" />
                <div>{title}</div>
            </div>
    </div>
  )
}

export default Bullets
