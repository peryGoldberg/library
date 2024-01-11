export const selectBook = (book) => {
    return { 
        type: "SELECT_BOOK",
        payload:book
     }
}
export const deleteBook = (id) => {
    return { 
        type: "DELETE_BOOK",
        payload:id
     }
}

export const addBook = (book) => {
    return { 
        type: "ADD_BOOK",
        payload:book
     }
}

export const selectBookForEdit = (book) => {
    return { 
        type: "SELECT_BOOK_FOR_EDIT",
        payload:book
     }
}

export const saveEditedBook = (book) => {
    return { 
        type: "SAVE_BOOK",
        payload:book
     }
}
 
