import React, { useState } from 'react';

export default function NewNoteForm(props) {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");

  function submit() {
    if (!noteTitle || !noteDescription) return;

    props.addNote(noteTitle, noteDescription);
    setNoteTitle("");
    setNoteDescription("");
  }
  return (
    <div>
      <form>

        <div className="mb-3">
          <label className="form-label">Note title</label>
          <input
            type="text"
            className="form-control"
            required
            value={noteTitle}
            onChange={arg => { setNoteTitle(val => val = arg.target.value); }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Note description</label>
          <textarea
            className="form-control"
            rows={5}
            required
            value={noteDescription}
            onChange={arg => { setNoteDescription(val => val = arg.target.value); }}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => { submit(); }}
        >
          Add
        </button>

      </form>
    </div>
  );
}