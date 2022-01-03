// Import React
import React from 'react';
// Import Person component
import Person from './Person';

// List component
const List = ({ people }) => {
    return(
        <>
            <main className='reminders'>
                {
                    people.map(
                        (person) => {
                            const { id } = person;
                            
                            return(
                                <Person key={ id } {...person}/>
                            );
                        }
                    )
                }
            </main>
        </>
    );
};

// Export List component
export default List;