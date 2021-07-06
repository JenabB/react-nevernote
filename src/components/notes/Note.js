import { deleteNote, toggleFav } from '../../store/actions/noteAction';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Swal from 'sweetalert2';
import moment from 'moment';

const Note = ({ note }) => {
  const dispatch = useDispatch();

  const toggleFavHandler = () => {
    dispatch(toggleFav(note));
  };

  const heartMarkup = note.favorite ? 'favorite' : 'favorite_border';

  const deleteNoteHandler = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteNote(note));
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  };

  return (
    <div className="note white">
      <div className="right-align">
        <i
          className="material-icons red-text"
          style={{ cursor: 'pointer' }}
          onClick={toggleFavHandler}
        >
          {heartMarkup}
        </i>
        <i
          className="material-icons"
          style={{ cursor: 'pointer' }}
          onClick={deleteNoteHandler}
        >
          delete
        </i>
      </div>
      <Link to={`notes/${note.id}`}>
        <h5 className="black-text">{note.title}</h5>
        <p className="truncate">{note.content}</p>
        <p className="grey-text">{moment(note.createdAt.toDate()).fromNow()}</p>
        <div className="right-align">
          <i className="material-icons black-text">edit</i>
        </div>
      </Link>
    </div>
  );
};

export default Note;
