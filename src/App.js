import React from 'react';

import './App.css';
import MediaCard from './MediaCard'
import Gate from './Gate'

function App() {
  return (
    <div className="App">
     Hello <strong>Usama Sohail</strong>! 
     <h2>Practicing React with Daveceddia</h2>
     <span>some ordered and unordered lists</span>
     <ul>
     <li>item 1</li>
     <li>item 2</li>
     </ul>
     <ol>
     <li>item 1</li>
     <li>item 1</li>
     </ol>
     <MediaCard 
     title={<h2>Mr Cat</h2>} 
     body="This is Mr Cat"
     imgURL="https://s3.amazonaws.com/freecodecamp/relaxing-cat.jpg" 
     />

     <Gate isOpen = {false}/>
    </div>
  );
}

export default App;
