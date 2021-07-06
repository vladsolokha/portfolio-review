import React, {useState, useEffect} from 'react';
import './App.css';

const students = ['joe ', 'billy ', 'bob ', 'jane ', 'john ', 'isaac ', 'vlad ']; //will need to be imported from file or so

function App() {

  const [names, setNames] = useState(students); //can store objects as state, can call in objects from outside of block
  const min = 0;
  const max = names.length;
  
  const [randomName, setRandomName] = useState(''); //sets state to get random name
  
  useEffect(() => {
    buttonHandler();
  })
  
  const buttonHandler = () => {
    const randindex = Math.floor(Math.random() * (max - min) + min);
    const getName = names[randindex];

    setRandomName(getName)
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          {randomName} {/*called from state variable above*/}
        </p>
                
        <button onClick={buttonHandler}>Get Name</button>
      
      </header>
    </div>
  );
}

export default App;
