import LoginPage from './components/LoginPage';
import SingUp from './components/SingUp';
import './App.css';
import { Route , Switch , Redirect} from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <>
        {/* <LoginPage/> */}
        {/* <SingUp/> */}
        <switch>
          <Route path="/login" component={LoginPage}/>
          <Route path="/singup" component={SingUp}/>
          <Redirect from="/" to="/singup"/>
        </switch>
    </>
  );
}

export default App;
