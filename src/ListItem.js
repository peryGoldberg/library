
import {deleteBook,selectBook,selectBookForEdit} from './store/action';
import {useDispatch} from 'react-redux';

const ListItem = ({one}) => {
    let dispatch = useDispatch();
    return ( 
        <div>
            <h3>{one.name}</h3>
            <input onClick={()=>{dispatch(deleteBook(one.id))}} type="button" value="מחק"/>
            <input onClick={()=>{dispatch(selectBookForEdit(one))}} type="button" value="עריכה"/>
            <input onClick={()=>{dispatch(selectBook(one))}} type="button" value="הצגת פרטים"/>
        </div>
     );
}
 
export default ListItem;




   