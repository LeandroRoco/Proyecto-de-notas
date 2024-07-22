import React from 'react';

const NotesList = ({ notes, removeNote, editNote }) => (
  <div className="flex flex-wrap justify-end">
    {notes.map((note, index) => (
      <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
        <div className="p-4 mb-2 bg-gray-700 rounded shadow-lg">
          <h5 className="text-xl font-bold text-white">{note.title}</h5>
          <p className="text-gray-300">{note.content}</p>
          <button className="p-1 mt-2 mr-2 text-white bg-red-500 rounded hover:bg-red-600" onClick={() => removeNote(index)}>Eliminar</button>
          <button className="p-1 mt-2 text-white bg-yellow-500 rounded hover:bg-yellow-600" onClick={() => editNote(index)}>Editar nota</button>
        </div>
      </div>
    ))}
  </div>
);

export default NotesList;
