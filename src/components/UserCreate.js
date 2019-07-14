import React from 'react';
import Field from './Field';
import Button from './Button';

const UserCreate = () => {
    return(
        <div className="ui form">
            <Field/> 
            <Button/>
        </div>
    );
    // note <Field/> creates an instance of the Field class
    //      <Button/> creates an instance of the Button class
};

export default UserCreate;