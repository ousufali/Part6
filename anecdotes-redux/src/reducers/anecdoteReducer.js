

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const anecdoteReducer = (state = initialState, action) => {
  // console.log('state now: ', state)
  // console.log('action', action)

  switch (action.type) {
    case 'VOTE':
      const id = action.id
      const Anecdote = state.find(anecdote => anecdote.id === id)
      const votedAnecdote = { ...Anecdote, votes: Anecdote.votes + 1 }

      return state.map(anecdote => anecdote.id !== id ? anecdote : votedAnecdote)

    case 'CREATE-ANECDOTE':
      return [...state, action.data]

    default:
      return state

  }


}

export const createAnecdote = (content) => {
  return {
    type: 'CREATE-ANECDOTE',
    data: {
      content: content,
      id: getId(),
      votes: 0
    }
  }
}
export const voteAnecdote = (id) => {
  return {
    type: 'VOTE',
    id: id
  }
}

export default anecdoteReducer