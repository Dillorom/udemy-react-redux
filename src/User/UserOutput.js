import React from 'react'
import UserOutput from './UserOutput.css'

const userOutput = (props) => {
    return(
        <div className="UserOutput">
            <p onClick={props.click}>First paragaraph by {props.username}</p>
            {props.children}
        </div>
    )
}

export default userOutput;