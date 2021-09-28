import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const InputBooks = (props) => {
  const [state, setState] = useState({
    title: '',
    author: '',
  });

  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.title.trim() && state.author.trim()) {
      props.addBookProps(state.title, state.author);
      setState({
        title: '',
        author: '',
      });
      setErrorMsg('');
    } else {
      setErrorMsg('Please add title and author');
    }
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="title"
          onChange={handleChange}
          name="title"
          value={state.title}
        />
        <input
          placeholder="authur"
          onChange={handleChange}
          name="author"
          value={state.author}
        />
        <Button label="Submit" />
        <p className="errorMsg">{errorMsg}</p>
      </form>
    </div>
  );
};

InputBooks.propTypes = {
  addBookProps: PropTypes.func.isRequired,
};

export default InputBooks;
