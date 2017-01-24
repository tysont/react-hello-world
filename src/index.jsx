import React, { Component } from 'react';
import { render } from 'react-dom';

import ContactList from './containers/ContactList';

class App extends Component {
    render() {

        return (
            <div>
                <h1>Hello world!</h1>
                <ContactList />
            </div>
        )
    }
}

render(<App />, document.getElementById('root'));
