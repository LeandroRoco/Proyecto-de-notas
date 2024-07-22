import React, { useState, useEffect } from 'react';

const FormComponent = ({ addNote, currentNote, updateNote, isEditing }) => {
const [note, setNote] = useState(currentNote);

useEffect(() => {
setNote(currentNote);
}, [currentNote]);

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
setNote({ description: '', grade: '', note: '', study: '', radio: '' });
};

return (
<form onSubmit={handleSubmit} className="p-4 bg-dark-background rounded-lg shadow-lg">
<input
type="text"
name="description"
value={note.description}
onChange={handleChange}
placeholder="Description"
className="w-full p-2 mb-2 text-black rounded"
/>
<input
type="text"
name="grade"
value={note.grade}
onChange={handleChange}
placeholder="Grade"
className="w-full p-2 mb-2 text-black rounded"
/>
<input
type="text"
name="note"
value={note.note}
onChange={handleChange}
placeholder="Note"
className="w-full p-2 mb-2 text-black rounded"
/>
<input
type="text"
name="study"
value={note.study}
onChange={handleChange}
placeholder="Study"
className="w-full p-2 mb-2 text-black rounded"
/>
<div className="mb-2">
<label className="inline-flex items-center">
<input
type="radio"
name="radio"
value="Option1"
checked={note.radio === 'Option1'}
onChange={handleChange}
className="form-radio"
/>
<span className="ml-2">Pasa de curso</span>
</label>
<label className="inline-flex items-center ml-4">
<input
type="radio"
name="radio"
value="Option2"
checked={note.radio === 'Option2'}
onChange={handleChange}
className="form-radio"
/>
<span className="ml-2">No pasa de curso</span>
</label>
</div>
<button type="submit" className="w-full p-2 mt-2 bg-colorImportante rounded text-white hover:bg-red-600">
{isEditing ? 'Update Note' : 'Add Note'}
</button>
</form>
);
};

export default FormComponent;