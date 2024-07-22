import React from 'react';

const NotesList = ({ notes, removeNote, editNote }) => (
<div className="flex flex-wrap justify-end">
{notes.map((note, index) => (
<div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
<div className="p-4 mb-2 bg-dark-background rounded shadow-lg">
<h5 className="text-xl font-bold text-colorNormal">{note.description}</h5>
<p className="text-colorNormal">Curso: {note.grade}</p>
<p className="text-colorNormal">Nota: {note.note}</p>
<p className="text-colorNormal">Estudiante: {note.study}</p>
<p className="text-colorNormal">Radio: {note.radio}</p>
<button className="p-1 mt-2 mr-2 bg-colorImportante rounded text-white hover:bg-red-600" onClick={() => removeNote(index)}>Delete</button>
<button className="p-1 mt-2 bg-yellow-500 rounded text-white hover:bg-yellow-600" onClick={() => editNote(index)}>Edit</button>
</div>
</div>
))}
</div>
);

export default NotesList;