import { useDispatch } from "react-redux"
import { saveEditedBook  } from "./store/action"
import { useForm } from "react-hook-form";
const EditBook = () => {
    let {register,handleSubmit} = useForm({
      });
    let dispatch = useDispatch();
    const save = (data)=>{
        alert(JSON.stringify(data))
         dispatch(saveEditedBook(data))
    }
    return ( 
        <form onSubmit={handleSubmit(save)}>
            <label>שם</label>
            <input {...register("name")}/>
            <label>סופר</label>
            <input {...register("bookWriter")}/>
            <label>מספר עמודים</label>
            <input {...register("numPages")}/>
            <input type="submit"/>
        </form>
     );
}
 
export default EditBook;