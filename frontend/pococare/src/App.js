import { Route, Routes } from 'react-router-dom';
import './App.css';
import PrivateRoutes from './Components/PrivateRoutes';
import Home from './Pages/Home/Home';

import SignIn from './Pages/SignIn/SignIn';
import SignupComponent from './Pages/SignUp/SignupComponent';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element = {<PrivateRoutes><Home /></PrivateRoutes>}/>

        <Route path='/signUp' element={<SignupComponent />}/>
        <Route path='/login' element={<SignIn />}/>
      </Routes>
    </div>
  );
}

export default App;
