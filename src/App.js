import LoginPage from './components/LoginPage';
import SingUp from './components/SingUp';
import './App.css';
import { Route , Routes , Navigate} from 'react-router-dom';

function App() {
  return (
    <>
        {/* <LoginPage/> */}
        {/* <SingUp/> */}
        <Routes>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/singup" element={<SingUp/>}/>
          <Route path="/" element={<Navigate to="/singup"/>}/>
        </Routes>
    </>
  );
}

export default App;
