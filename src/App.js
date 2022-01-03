// Import React
import React from 'react';
// Import the reminders information
import peopleData from './data-people';
// Import the List component
import List from './List';

const App = () => {
  // People State
  const [people, setPeople] = React.useState(peopleData);

  const mainHeading = people.length + ' Birthdays Today';

  const clearButton = document.querySelector('.clear-button');
  
  // Clears all reminders when called
  const clearAllReminders = () => {
    setPeople([]);
    clearButton.setAttribute('disabled', 'disabled');
    clearButton.classList.remove('clear-button--hover');
  };
  
  return(
    <div className="container">
      <h1 className='main-heading'>{ mainHeading }</h1>
      <List people={ people }/>
      <button className='clear-button clear-button--hover' onClick={ () => { clearAllReminders(); } }>Clear All</button>
    </div>
  );
};

export default App;