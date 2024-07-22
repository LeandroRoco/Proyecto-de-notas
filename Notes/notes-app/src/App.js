import React, { useState, useEffect } from 'react';
import FormComponent from './components/FormComponent';
import NotesList from './components/NotesList';
import { getNotes, setNotes } from './utils';

const App = () => {
  const [notes, setNotesState] = useState([]);
  const [currentNote, setCurrentNote] = useState({ title: '', content: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    setNotesState(getNotes());
  }, []);

  const addNote = (note) => {
    const newNotes = [...notes, note];
    setNotesState(newNotes);
    setNotes(newNotes);
  };

  const removeNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotesState(newNotes);
    setNotes(newNotes);
  };

  const editNote = (index) => {
    setCurrentNote(notes[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const updateNote = (updatedNote) => {
    const updatedNotes = notes.map((note, i) => (i === editIndex ? updatedNote : note));
    setNotesState(updatedNotes);
    setNotes(updatedNotes);
    setIsEditing(false);
    setEditIndex(null);
    setCurrentNote({ title: '', content: '' });
  };

  return (
    <div className="container mx-auto my-10 p-6 max-w-4xl bg-gradient-to-r from-blue-900 via-gray-900 to-purple-900 rounded-lg shadow-xl">
      <h1 className="mb-4 text-3xl font-bold text-center text-white">Escribe aqui tus notas</h1>
      
      <FormComponent
        addNote={addNote}
        currentNote={currentNote}
        updateNote={updateNote}
        isEditing={isEditing}
      />
      <div className="flex flex-wrap justify-end">
        <NotesList notes={notes} removeNote={removeNote} editNote={editNote} />
      </div>
    </div>
    
  );
};

export default App;
