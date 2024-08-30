import { useState } from 'react'

const Button = (props) => {
  return <button onClick={props.click}>{props.value}</button>;
};

const App = () => {
  const [anecdotes, setAnectdotes] = useState([
    {text:'If it hurts, do it more often.', point:0},
    {text:'Adding manpower to a late software project makes it later!', point:0},
    {text:'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', point:0},
    {text:'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', point:0},
    {text:'Premature optimization is the root of all evil.', point:0},
    {text:'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', point:0},
    {text:'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.', point:0},
    {text:'The only way to go fast, is to go well.', point:0}
  ]);
  const [selected, setSelected] = useState(0)
  
  const random = () => {
    let randomize = Math.floor(Math.random() * anecdotes.length)
    console.log(randomize)
    return randomize;
  }

  const voteClick = () => {
    const newAnecdotes = anecdotes.map((anecdote, i) => {
      if (i === selected) {
        return { ...anecdote, point: anecdote.point + 1 };
      }
      return anecdote;
    });
    setAnectdotes(newAnecdotes);
  }

  const mostVotesAnecdote = anecdotes.reduce((prev, current) => {
    return (current.point > prev.point) ? current : prev;
  }, anecdotes[0]);
  
  return (
    <div>
      {anecdotes.length > 0 ? (
            `${anecdotes[selected].text}
            has ${anecdotes[selected].point} votes`
          ) :
        ('')
      }
      <br />

      <br/>
      <Button value="vote" click={() => voteClick()}></Button>
      <Button value="next anecdote" click={() => setSelected(random)}></Button>
      <h1>Anecdote with most votes</h1>
      {anecdotes.length > 0 ? (
            `${mostVotesAnecdote.text}
            has ${mostVotesAnecdote.point} votes`
          ) :
        ('')
      }
    </div>
  )
}

export default App