import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, unsetNotification } from '../reducers/notificationReducer'



const AnecdoteForm = () => {
    const dispatch = useDispatch()


    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        console.log(content, "CONTENT")
        dispatch(createAnecdote(content))
        dispatch(setNotification("'" + content + "' added"))
        setTimeout(() => dispatch(unsetNotification()), 5000)
    }



    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div><input name="anecdote" placeholder="new anecdote" /></div>
                <button type="submit">create</button>
            </form>

        </div>
    )
}

export default AnecdoteForm