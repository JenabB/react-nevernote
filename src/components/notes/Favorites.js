import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import NoteList from '../notes/NoteList';
import {Link} from 'react-router-dom';

const Favorites = () => {
  useFirestoreConnect([
    {
      collection: 'notes',
      where: ['favorite', '==', true],
      orderBy: ['createdAt', 'desc'],
      storeAs: 'favnotes',
    },
  ]);
  const favnotes = useSelector((state) => state.firestore.data['favnotes']);
  // const notesListMarkup = favnotes ? <NotesList notes={favnotes} /> : null
  // const favarray = favnotes ? Object.key(favnotes) : []
  const fav_array = [];
  for (let key in favnotes) {
    fav_array.push({ id: key, ...favnotes[key] });
  }

  return (
    <div>
      {favnotes ? <NoteList notes={fav_array} /> :(
        <div className="center white container empty-fav">
          <h5 className="black-text">No favorite</h5>
          <Link to="/"><button className="btn orange">
          Home</button></Link>
        </div>
      )}
    </div>
  );
};

export default Favorites;
