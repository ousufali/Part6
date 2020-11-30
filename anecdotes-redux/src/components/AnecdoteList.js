import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, unsetNotification } from '../reducers/notificationReducer'
import Filter from './Filter'


const Anecdotes = () => {
    const dispatch = useDispatch()
    const Query = useSelector(state => state.Filter)
    const FilteredAnecdotes = useSelector(state => {
        return state.Anecdotes.filter((anecdote) => anecdote.content.indexOf(Query) > -1)
    })
    // const anecdotes = useSelector(state => state.Anecdotes.sort((x, y) => y.votes - x.votes))
    const anecdotes = FilteredAnecdotes.sort((x, y) => y.votes - x.votes)




    const vote = (id, content) => {
        console.log('vote', id)
        dispatch(voteAnecdote(id))
        dispatch(setNotification("You votes '" + content + "'"))
        setTimeout(() => dispatch(unsetNotification()), 5000)
    }

    return (
        <div>
            <Filter />
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Anecdotes