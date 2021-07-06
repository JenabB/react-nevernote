import Swal from 'sweetalert2';

export const addNote = (note) => {
  console.log(note);
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('notes')
      .add({
        ...note,
        favorite: false,
        createdAt: new Date(),
      })
      .then((data) => {
        Swal.fire({
          text: 'Note added',
          icon: 'success',
          confirmButtonText: 'Ok',
        });
        // dispatch({ type: "CREATE_PROJECT_SUCCESS", project });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
