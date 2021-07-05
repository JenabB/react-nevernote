import React from 'react';
import Note from './Note';

const NoteList = ({ notes }) => {
  console.log('notelist', notes);
  return (
    <div className="notelist">
      <h1>Note List</h1>
      {notes && notes.map((note) => <Note note={note} />)}
    </div>
  );
};

export default NoteList;
