import React from 'react';
import Note from './Note';

const NoteList = ({ notes }) => {
  return (
    <div className="notelist">
      {notes && notes.map((note) => <Note note={note} />)}
    </div>
  );
};

export default NoteList;
