
import {  Container, Jumbotron } from 'react-bootstrap';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <div>
      <Jumbotron>
        <Container>
          <h1>Search App</h1>
          <p>This is a simple search app</p>
          
          <SearchForm />
        </Container>
      </Jumbotron>
    </div>
  );
}

export default App;
