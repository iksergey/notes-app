import React, { useState } from 'react';

export default function NewNoteForm(props) {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");

  return (
    <div>
      <form>

        <div className="mb-3">
          <label className="form-label">Note title</label>
          <input
            type="text"
            className="form-control"
            required
            onChange={arg => { setNoteTitle(val => val = arg.target.value); }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Note description</label>
          <textarea
            className="form-control"
            rows={5}
            required
            onChange={arg => { setNoteDescription(val => val = arg.target.value); }}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => { props.addNote(noteTitle, noteDescription); }}
        >
          Add
        </button>

      </form>
    </div>
  );
}