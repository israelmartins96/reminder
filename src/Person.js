// Import React
import React from 'react';

// Person component
const Person = ({ name, age, image }) => {
    return(
        <>
            <div className='reminder'>
                <img src={ image } alt={ name } className='photo'/>
                <h2 className='name'>{ name }</h2>
                <p className='age'>{ age } years old</p>
            </div>
        </>
    );
};

// Export Person component
export default Person;