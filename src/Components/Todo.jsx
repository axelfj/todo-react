import React, { useState } from "react";
import styled from "styled-components";


const StyledDiv = styled.div`
display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh"
`

const Todo = () => {
  const [notes, setNotes] = useState({});

  const addNote = (event) => {
    if (event.key === 'Enter') {
      const note = event.target.value;
      setNotes(prevNotes => ({
        ...prevNotes,
        [note]: { note, isDone: false } // You can directly use object shorthand notation
      }));

      event.target.value = "";
    }
  }

  const setIsDone = (event) => {
    const noteText = event.target.textContent;
    setNotes(prevNotes => ({
      ...prevNotes,
      [noteText]: { ...prevNotes[noteText], isDone: !prevNotes[noteText].isDone } // Object destructuring here
    }));
  }

  return (
    <StyledDiv>
      <h1>TODO LIST</h1>
      <input onKeyDown={(event) => addNote(event)} height={150}/>
      {Object.entries(notes).map(([noteKey, note]) => (
        <p
          onClick={(event) => setIsDone(event)}
          key={noteKey}
          style={{ textDecoration: note.isDone ? 'line-through' : 'none' }}
        >
          {note.note}
        </p>
      ))}
    </StyledDiv>
  );
};

export default Todo;
