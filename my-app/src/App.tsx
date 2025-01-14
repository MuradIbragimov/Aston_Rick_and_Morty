import { Route, Routes } from 'react-router-dom';
import { History } from './pages/history/history';
import { Favourites } from './pages/favourites/Favorurites';
import { Characters } from './pages/characters/Characters';
import { NotFound } from './pages/notFound/NotFound';
import { Registration } from './pages/registration/Registration';
import './App.css';
import { Layout } from './components/Layout/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Characters/>}/>
          <Route path='/favourites' element={<Favourites/>}/>
          <Route path='/history' element={<History/>}/>
          <Route path='/registration' element={<Registration/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App;
