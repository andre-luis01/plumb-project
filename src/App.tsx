
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Routes/Home';
import Form from './Routes/Form';

function App() {
  return (
    <>
      {/* <Cabecalho />
      <Container>
        <Login></Login>
      </Container> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/form' element={< Form/>}/>
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
