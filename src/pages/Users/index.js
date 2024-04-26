import {useState, useEffect} from 'react';

import User from './User';

import './users.css';

function Users() {
    const [contacts, setContacts] = useState([]);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=> {
            return res.json();
        }).then(data => {
            setContacts(data);
        });
    },[]);

    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                       <th>User Full Name</th>
                       <th>User Login</th>
                       <th>User Phone N</th>
                       <th>User's Albums</th>
                    </tr>
                </thead>
                <tbody>
                {contacts.map(contact => {
                    return (
                       <User
                           contact={contact}
                           key={contact.id}
                       />
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}

export default Users;