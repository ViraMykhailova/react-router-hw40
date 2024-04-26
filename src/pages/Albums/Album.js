import {Link} from 'react-router-dom';
export default function Album ({album}) {

    return (
        <div>
            <h3>{album.title}</h3>
            <Link to={`/albums/${album.id}`}>
                <button className='photosBtn'>Photos</button>
            </Link>
        </div>
    );

}