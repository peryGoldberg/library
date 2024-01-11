const myInitialState = {
    arr:[
{id:1 , name: "ילדי שי",bookWriter:"פוקס מנוחה",numPages:"200"},
{id:2 , name: "דינה די",bookWriter:"מנוחה בקרמן",numPages:"20"},
{id:3 , name: "נתי וצביקי",bookWriter:"פלג תרצה",numPages:"90"}
    ],
    selectBook: null,
    selectBookForEdit: null
}

export const bookReducer = (state = myInitialState , action) =>{
    switch (action.type) {
        case "ADD_BOOK":
            return {
                selectBook: action.book,
                selectBookForEdit: state.selectBookForEdit,
                arr: [...state.arr,action.payload]
            }
            case "SELECT_BOOK":
                return {
                selectBook: action.payload,
                selectBookForEdit: state.selectBookForEdit,
                arr: state.arr
                }  
            case "SELECT_BOOK_FOR_EDIT":
                return {
                    selectBook: state.selectBook,
                    selectBookForEdit: action.payload,
                    arr: state.arr
                }
            case "DELETE_BOOK":
                return {
                    selectBook: state.selectBook?.id != action.payload ? state.selectBook : null,
                    selectBook: state.selectBookForEdit?.id != action.payload ? state.selectBookForEdit : null,
                    arr: state.arr.filter(item => item.id != action.payload)
                } 
            case "SAVE_BOOK":  
              let index = state.arr.findIndex(item => item.id === action.payload.id);
             let copy = [...state.arr];
             copy.splice(index, 1, action.payload);

            // let copy = state.arr.map(item => {
            //     if (item.id !== action.payload.id)
            //         return item;
            //     return action.payload;
            // })

                return {
                    arr: copy,
                    selectBook: state.selectBook,
                    selectBookForEdit: null 
                }

        default: return state;
    }
}