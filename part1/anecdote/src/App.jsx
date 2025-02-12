import { useState } from 'react';

const App = () => {
  const language = [
    'kashmiri',
    'malyalam',
    'English'

  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(language.length).fill(0)); // Initialize with zeros

  // Function to select a random anecdote
  const handleNextlanguage = () => {
    const randomIndex = Math.floor(Math.random() * language.length);
    setSelected(randomIndex);
  };

  // Function to vote for the current anecdote
  const handleVote = () => {
    const copy = [...votes];
    copy[selected] += 1; // Increment votes for the current anecdote
    setVotes(copy);
  };

  // Find anecdote with the most votes
  const maxVotes = Math.max(...votes);
  const mostVotesIndex = votes.indexOf(maxVotes);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>language of the Day</h1>
      <p style={{ fontStyle: 'italic', marginBottom: '10px' }}>
        "{language[selected]}"
      </p>
      <p>has {votes[selected]} votes</p>

      <div>
        <button
          onClick={handleVote}
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            cursor: 'pointer',
            borderRadius: '5px',
            marginRight: '10px',
          }}
        >
          Vote
        </button>
        <button
          onClick={handleNextlanguage}
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
        >
          Next language
        </button>
      </div>

      <h2>language with Most Votes</h2>
      {maxVotes > 0 ? (
        <>
          <p style={{ fontStyle: 'italic' }}>"{language[mostVotesIndex]}"</p>
          <p>has {maxVotes} votes</p>
        </>
      ) : (
        <p>No votes yet</p>
      )}
    </div>
  );
};

export default App;