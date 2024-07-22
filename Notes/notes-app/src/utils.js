export const getNotes = () => JSON.parse(localStorage.getItem('notes')) || [];

export const setNotes = (notes) => {
  localStorage.setItem('notes', JSON.stringify(notes));
};
