import {Link} from 'react-router-dom';

function NotFoundPage() {
    return (
        <div>
            404 - not found
            <Link to='/'>Go to Users Page</Link>
        </div>
    );
}

export default NotFoundPage;