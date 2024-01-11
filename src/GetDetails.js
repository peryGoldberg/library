import { useSelector } from "react-redux";

const GetDetails = () => {
    let selectBook = useSelector(state => state.selectBook)
    return ( 
        <>       
       <h2> {selectBook.name}</h2>
       <h4> {selectBook.id}</h4>
       <h4> {selectBook.bookWriter}</h4>
       <h4> {selectBook.numPages}</h4>
        </>
     );
}
 
export default GetDetails;