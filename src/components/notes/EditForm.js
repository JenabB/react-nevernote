import { useDispatch, useSelector } from 'react-redux';
import { updateNote } from '../../store/actions/noteAction';
import useInput from '../../customhook/useInput';
import { useHistory } from 'react-router-dom';

const EditForm = () => {
  const dispatch = useDispatch();

  const note = useSelector((state) => state.note);

  const history = useHistory();
  const [title, bindTitle, resetTitle] = useInput(note.title);
  const [content, bindContent, resetContent] = useInput(note.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateNote({ id: note.id, title, content }));
    resetTitle();
    resetContent();
    history.push('/');
  };

  return (
    <div className="section">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">New Note</h5>
        <div className="input-field">
          <input
            value="Alvin"
            id="note_title"
            type="text"
            className="validate"
            {...bindTitle}
            required
          />
          <label className="active" htmlFor="note_title">
            Note Title
          </label>
        </div>
        <div className="input-field">
          <textarea
            id="note_content"
            class="materialize-textarea"
            {...bindContent}
            required
          ></textarea>
          <label className="active" htmlFor="note_content">
            Note Content
          </label>
        </div>
        <button className="btn orange">Update</button>
      </form>
    </div>
  );
};

export default EditForm;
