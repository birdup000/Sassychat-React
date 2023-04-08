import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Person, Avatar } from './UserProfile';
import VideoChatPage from './VideoChatPage';

function App() {
  let nate = new Person("nate", "VWjRf", "8tyr", 11);
  return (
    <Router>
      <div className="App">
        <header className="Main-Header">
          <Avatar person={nate.Person} size="1" />
        </header>
        <Link to="/video-chat">
          <button>Go to Video Chat</button>
        </Link>
        <Switch>
          <Route path="/video-chat" component={VideoChatPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
