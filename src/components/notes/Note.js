import React from 'react';

const Note = ({ note }) => {
  return (
    <div>
      <h1>{note.title}</h1>
      <h2>{note.content}</h2>
    </div>
  );
};

export default Note;
