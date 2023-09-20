

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/layout';
import Home from './pages/home' ;
import About from './pages/about';
import User from './pages/user';
import Blogs from './pages/blogs';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route className="layout" path='/' element={<Layout/>}>
        <Route path='home' element={<Home/>}></Route>
        <Route path='user' element={<User/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
