import logo from './logo.svg';
import squirrel from './pexels-joseph-yu-177551-620110.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Welcome to our React app! Let's dive into the world of creativity.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Click here to embark on an adventure with the mischievous squirrel!
    </a>
    <div className="Squirrel">
      <img src={squirrel} className="Squirrel-image" alt="squirrel" />
      <p className="Squirrel-text">
        The mischievous squirrel darted across the park, clutching a shiny acorn in its tiny paws.
        Look closely, and you might just catch a glimpse of its playful antics!
      </p>
    </div>
  </header>
</div>
  );
}

export default App;
