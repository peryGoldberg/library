import logo from './logo.svg';
import './App.css';
import List from './List';
import { useSelector } from 'react-redux';
import GetDetails from './GetDetails';
import EditBook from './EditBook';
import Add from './store/Add';
function App() {
  let selected = useSelector(sta => sta.selectBook)
  let selectedFroEdit = useSelector(sta => sta.selectBookForEdit)
  return (<>
  <List/>
  {selected && <GetDetails />} 
   {selectedFroEdit && <EditBook/>}
   <Add/>
</>
  );
}

export default App;
