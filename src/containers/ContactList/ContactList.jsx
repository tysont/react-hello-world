import React, { Component } from 'react';
import Contact from '../../components/Contact'

class ContactList extends Component {
    // static properties ESNext
    state = {
        contacts: [{
            name: "Jhon",
            cell: "13213-124123-123"
        }]
    }

    /*
    constructor(props) {
        super(props);

        this.state = [{
            name: "Jhon",
            cell: "13213-124123-123"
        }]
    }
    */

    render() {
        return (
            <div>
                <ul>
                    {this.state.contacts.map((contact, i) =>
                        <Contact key={i} contact={contact} />
                    )}
                </ul>
            </div>
        )
    }
}

export default ContactList;
