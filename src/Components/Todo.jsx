import React, { useState } from "react";

const Todo = () => {
  const [notes, setNotes] = useState({});

  const addNote = (event) => {
    if (event.key === 'Enter') {
      const note = event.target.value;
      setNotes(prevNotes => ({
        ...prevNotes,
        [note]: { note, isDone: false }
      }));

      event.target.value = "";
    }
  }

  const setIsDone = (noteText) => {
    setNotes(prevNotes => ({
      ...prevNotes,
      [noteText]: { ...prevNotes[noteText], isDone: !prevNotes[noteText].isDone }
    }));
  }

  return (
    <div className="container">
      <h1>TODO LIST</h1>
      <input onKeyDown={(event) => addNote(event)} placeholder="Add a to do" />
      {Object.entries(notes).map(([noteKey, note]) => (
        <p
          onClick={() => setIsDone(noteKey)}
          key={noteKey}
          style={{ textDecoration: note.isDone ? 'line-through' : 'none' }}
        >
          {note.note}
        </p>
      ))}
    </div>
  );
};

export default Todo;
