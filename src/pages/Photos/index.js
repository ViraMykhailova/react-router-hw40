import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import Photo from './Photo';

function Photos() {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        setLoading(true);

        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}&_limit=2`)
            .then(res=> res.json())
            .then(data=>{
                setPhotos(data);
                setLoading(false);
            });
    }, [id]);

    if(loading) {
        return <span> Data is loading ...</span>
    }
    return (
        <div>
            {photos.map(photo => {
                return (
                    <Photo
                        photo={photo}
                        key={photo.id}
                    />
                )
            })}
        </div>
    );
}
export default Photos;