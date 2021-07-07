import { useHistory } from 'react-router-dom';
import useInput from '../../customhook/useInput';
import { addNote } from '../../store/actions/noteAction';
import { useDispatch } from 'react-redux';

const Form = () => {
  const [title, bindTitle, resetTitle] = useInput();
  const [content, bindContent, resetContent] = useInput();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNote({ title, content }));
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
          <label htmlFor="note_content">Note Content</label>
        </div>
        <button className="btn orange">Add</button>
      </form>
    </div>
  );
};

export default Form;
