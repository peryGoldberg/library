
import { useForm } from 'react-hook-form';
import {useDispatch} from 'react-redux';
import { addBook } from './action';
const Add = () => {
        let {register,handleSubmit} = useForm({
          });
        let dispatch = useDispatch();
        const save = (data)=>{
            alert(JSON.stringify(data))
             dispatch(addBook(data))
        }
        return (
            <>
          <h1>  הוסף ספר</h1>
            <form onSubmit={handleSubmit(save)}>
                <label>שם</label>
                <input {...register("name")}/>
                <label>סופר</label>
                <input {...register("bookWriter")}/>
                <label>מספר עמודים</label>
                <input {...register("numPages")}/>
                <input type="submit"/>
            </form>
            </> 
         );
    }
     
   

 
export default Add;