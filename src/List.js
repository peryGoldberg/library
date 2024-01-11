import ListItem from "./ListItem";
import {useSelector} from "react-redux"
const List = () => {
    let arr = useSelector(state=>state.arr);
    return ( 
        <>
        <h1>רשימת ספרים</h1>
        <ul>
{arr.map(item=> 
<li key={item.id}><ListItem one={item}/></li>
    )}
        </ul>
        </>
     );
}
 
export default List;