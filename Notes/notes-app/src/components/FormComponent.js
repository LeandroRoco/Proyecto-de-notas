import React, { useState } from 'react';

const FormComponent = ({ addNote, currentNote, updateNote, isEditing }) => {
  const [note, setNote] = useState(currentNote);

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      updateNote(note);
    } else {
      addNote(note);
    }
    setNote({ title: '', content: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-800 rounded-lg shadow-lg">
      <input
        type="text"
        name="title"
        value={note.title}
        onChange={handleChange}
        placeholder="Title"
        className="w-full p-2 mb-2 text-black rounded"
      />
      <textarea
        name="content"
        value={note.content}
        onChange={handleChange}
        placeholder="Content"
        className="w-full p-2 mb-2 text-black rounded"
      />
      <button type="submit" className="w-full p-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-600">
        {isEditing ? 'Update Note' : 'Add Note'}
      </button>
    </form>
  );
};

export default FormComponent;
