import { useDispatch } from "react-redux"
import { addTrack } from "../../store/slices/tracks.slice"
import "../styles/TrackCard.css"
import { Link, useNavigate } from "react-router-dom"


const TrackCard = ({ track }) => {

    const dispatch = useDispatch()
    
    const navigate = useNavigate()

    const handleAddTrack = () => {
        dispatch(addTrack(track))
    }

    const handleArtist = (id) => {
        navigate(`/artist/${id}`)
    }

    return (
        <article className="card">
            <header className="card__header">
                <img className="card__img" src={track.album.images[0].url} alt="" />
            </header>
            <section className="card__body">
                <Link to={`/track/${track.id}`}><h3 className="card__name">{track.name}</h3></Link>
                <ul className="card__ul">
                    {
                        track.artists.map(artist => (
                            <li onClick={() => handleArtist(artist.id)} className="card__li" key={artist.id}>
                                {artist.name}
                            </li>
                        ))
                    }
                </ul>
                <footer className="card__footer">
                    <a target="_blank" href={track.external_urls.spotify}>
                        <i className='bx bxl-spotify'></i>
                    </a>
                    <button onClick={handleAddTrack}>
                        <i className='bx bx-bookmark-plus'></i>
                    </button>
                </footer>
            </section>
        </article>
    )
}

export default TrackCard