import { useEffect } from 'react'
import './App.css';
import Header from './components/Header/Header';
import DashBoard from './components/DashBoard/DashBoard';
import { useDispatch, useSelector} from 'react-redux'
import { fetchTicket } from './HelperFunctions/HelperFunction';
import Loading from './components/Loading/Loading';

const App = () => {
  const dispatch = useDispatch();
  const {allTickets} = useSelector(state => state.DataReducer);
   
  useEffect(() => {
    dispatch(fetchTicket());
  }, [dispatch])

  return allTickets ? (
    <div style={{paddingTop : "10px"}} >
      <Header/>
      <hr style={{marginTop : "10px"}} />
      <DashBoard/>
    </div>
  ) : <Loading/>
}

export default App