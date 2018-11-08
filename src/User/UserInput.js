import React from 'react'
import UserInput from './UserInput.css'

const userInput = (props) => {
    return(
        <div className="UserInput">
            <input type="text" onChange={props.change}/>
        </div>
    )
}
export default userInput;