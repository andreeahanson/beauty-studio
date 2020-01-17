import React from 'react';
import "./NotesForm.css";

const NotesForm = () => {
  return(
    <form>
      <label>My notes: </label>
      <input type="text" />
      <button>Add my note</button>
    </form>
  )
}

export default NotesForm;