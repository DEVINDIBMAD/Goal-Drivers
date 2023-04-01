import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import './App.css';
import photo from './photo.jpg';


function App() {
  return (
    <div className="App">
     
     <div className="form-photo">
        <img src={photo} alt="form" />
        </div>
        
          <RegistrationForm/>
   
      </div>

  );
}

export default App;
