import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import routePage from './components/routePage';
function App() {
  return (
    <Router>
      <Route exact path="/:id" component={routePage}/>
    </Router>
  );
}

export default App;
