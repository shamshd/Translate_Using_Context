import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {

    // this how we hook up a context object to a class component
    // static contextType adds a property directly to our class itself

    // so static contextType = LanguageContext is equivalent to writing
     // AFTER creating the class
    // Button.contextType = LanguageContext
   
    // either way of hooking up contextType is OK

    static contextType = LanguageContext;

    render() {
        const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
        return(
            <button className="ui button primary">{text}</button>
        )
    }
};

export default Button;