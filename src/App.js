// Importing necessary styles and components
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './components/content';
import Footer from './components/footer';
import Header from './components/header';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './components/create';
import Read from './components/read';
import Edit from './components/editTrip';

// Main App component
function App() {
  return (
    <BrowserRouter>
      {/* Main container for the application */}
      <div className="App">
        {/* Navigation bar */}
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Pokedex</Nav.Link>
              <Nav.Link href="/create">Add Pokemon</Nav.Link>
              <Nav.Link href="/read">Check Pokemon</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        {/* Routes for different pages */}
        <Routes>
          <Route path='/' element={<Content></Content>}></Route>
          <Route path='/read' element={<Read></Read>}></Route>
          <Route path='/create' element={<Create></Create>}></Route>
          <Route path='/edit/:id' element={<Edit></Edit>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// Exporting the App component
export default App;
