import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import TrackCard from "../HomePage/TrackCard"

const TracksRelated = ({ artist }) => {

  const [tracksList, getTracksList] = useFetch()

  useEffect(() => {
    if (artist) {
      getTracksList(`/api/tracks?limit=5&q=${artist}`)
    }
  }, [artist])

  return (
    <section>
      <h3>Tracks related:</h3>
      <div>
        {
          tracksList?.tracks.items.map(track => (
            <TrackCard 
            key={track.id}
            track={track}
            />
          ))
        }
      </div>
      
    </section>
  )
}

export default TracksRelated