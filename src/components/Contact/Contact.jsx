import React from 'react';

const Contact = (props) => {
    return (
        <li>
            Name: {props.contact.name} | Cell: {props.contact.cell}
        </li>
    )
}

export default Contact;
