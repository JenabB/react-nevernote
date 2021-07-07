import NoteList from '../notes/NoteList';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import FloatingAdd from '../notes/FloatingAdd';

const Home = () => {
  useFirestoreConnect([
    { collection: 'notes', orderBy: ['createdAt', 'desc'] },
  ]);
  const notes = useSelector((state) => state.firestore.ordered.notes);

  return (
    <div className="container home">
      <div className="row center-align">
        <FloatingAdd />
        <NoteList notes={notes} />
      </div>
    </div>
  );
};

export default Home;
