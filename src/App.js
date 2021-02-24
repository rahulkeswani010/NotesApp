import './App.css';
import Header from './components/header/Header';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import AddNotes from './components/AddNotes';
import ShowNotes from './components/ShowNotes';

function App() {
  return (
    <div>
    <Router>
        <Header />
        <Switch>
        <Route exact path="/" component={ShowNotes}/>
          <Route path="/addnotes" component={AddNotes}/>
        </Switch>
        
      </Router>
    
    </div>
  );
}

export default App;
