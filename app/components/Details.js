import React from 'react'

const Details = (props) => {
    return (
        <div>
            <div className='flex gap-1'>
                <img src="icons/arrow2.svg" alt="no icon" />
                <div className='font-bold'>{props.title}</div>
            </div>
            <div className='mx-7'>
                {props.detail}
            </div>
        </div>
    )
}

export default Details
