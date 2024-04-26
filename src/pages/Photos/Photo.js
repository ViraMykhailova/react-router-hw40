
export default function Photo ({photo}) {

    return (
        <div>
            <h3>{photo.title}</h3>
            <img src={photo.url} alt='albumImg'/>
        </div>
    );

}