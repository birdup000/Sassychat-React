import './App.css';
import {Person, Avatar} from './UserProfile'

function App() {
  let nate = new Person("nate", "VWjRf", "8tyr", 11)
  return (
    <div className="App">
      <header className="Main-Header">
        <Avatar person = {nate.Person} size='1' />
      </header>
    </div>
  );
}

export default App;
