import React, { useState } from 'react'
import './NewUser.css'


const NewUser = (props) =>
{
    const[enteredName,setName] = useState('')
    const nameChangeHandler = (event) =>
    {
        setName(event.target.value)
        console.log(enteredName)
    }

    const[enteredAge,setAge] = useState('')
    const ageChangeHandler = (event) =>
    {
        setAge(event.target.value)
        console.log(enteredAge)
    }

    const onButtonSubmit = (event) =>
    {
        event.preventDefault()
        const user = {
            name:enteredName,
            age:enteredAge
        }
        props.onAddUser(user)
        setName('')
        setAge('')
    }

    return (
        <form onSubmit={onButtonSubmit}>

        <div className='newuser-control'>
                <div> <label>Username</label>
                    <input 
                        type="text" 
                        value={enteredName} 
                        onChange={nameChangeHandler}/>
                    </div>
                <div> <label>Age (Years)</label>
                    <input 
                        type="number" min="0" step="1"
                        value={enteredAge} 
                        onChange={ageChangeHandler}
                        />
                </div>
                <div>
                    <button  type="submit">Add User</button>
                </div>
        </div>
        </form>

    )
}

export default NewUser