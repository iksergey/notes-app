import React from 'react';

export default function NewNoteForm() {
  return (
    <div>
      <form>

        <div className="mb-3">
          <label className="form-label">Note title</label>
          <input type='text' className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Note description</label>
          <textarea type='text' className="form-control" rows={5} required />
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => { console.log('NewNoteForm btn click '); }}
        >
          Add
        </button>

      </form>
    </div>
  );
}