import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import Album from './Album';

import './albums.css';

function Albums() {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(()=> {
        setLoading(true);

        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}&_limit=2`)
            .then(res=> {
                return res.json();
            }).then(data => {
            setAlbums(data);
            setLoading(false);
        });
    },[id]);

    if(loading) {
        return <span> Data is loading ...</span>
    }
    return (
        <div>
            {albums.map(album => {
                return (
                    <Album album={album}
                    key={album.id}/>
                );
            })}
        </div>
    );
}
export default Albums;