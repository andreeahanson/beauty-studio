import React from 'react';
import './NotesForm.css';
import NoteList from '../NoteList/NoteList';

const NotesForm = () => {
  return(
    <form>
      <h5>THIS SECTION IS UNDER CONSTRUCTION ... </h5>
      <h4>My notes: </h4>
      <input type="text" />
      <button>Add my note</button>
      <NoteList />
    </form>
  )
}

export default NotesForm;