import {Link} from 'react-router-dom';
export default function User ({contact}) {
    return (
        <tr>
            <td>{contact.name}</td>
            <td>{contact.username}</td>
            <td>{contact.phone}</td>
            <td>
                <Link to={`/${contact.id}`}>
                    <button className='albumBtn'>Album</button>
                </Link>
            </td>
        </tr>
    );
}