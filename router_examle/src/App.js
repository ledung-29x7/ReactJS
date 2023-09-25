import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import './App.css';
import Layout from './layout';
import About from './about';
import User from './user';
import Home from './home';
import UserList from './componants/user2';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/" element= {<Layout/>}>
          <Route path='/home' element={<Home/>}/>        
          <Route path='/user' element= {<User />} />
          <Route path='/users/:dung' element= {<UserList/>} /> 
          <Route path='/about' element= {<About/>}/> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
