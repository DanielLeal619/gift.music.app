import { useSelector } from "react-redux"
import TrackList from "./TrackList"
import { useState } from "react"
import "./styles/HeaderMusic.css"
import { useForm } from "react-hook-form"
import usePlaylist from "../../../hooks/usePlaylist"

const HeaderMusic = () => {

    const tracksPlaylist = useSelector(store => store.tracks)

    const { reset, register, handleSubmit } = useForm()

    const [showPlaylist, setShowPlaylist] = useState(false)

    const { postPlaylist } = usePlaylist()

    const handlePlaylist = () => {
        setShowPlaylist(!showPlaylist)
    }

    const submit = data => {
        const obj = {
            ...data,
            tracks: tracksPlaylist.map(e => ({ id: e.id }))
        }
        postPlaylist(obj)
        reset({
            title: "",
            to: "",
            message: ""
        })
    }

    console.log(tracksPlaylist)

    return (
        <header className="banner">
            <section className="banner__header">
                <div className="banner__title">
                    <h2 className="banner__letter">Gift Music</h2>
                </div>
                <div className="banner__bt">
                    <i className="banner__icon" onClick={handlePlaylist} class='bx bxs-playlist'></i>
                </div>
            </section>
            {
                showPlaylist
                    ? (
                        <div>
                            <form onSubmit={handleSubmit(submit)}>
                                <div>
                                    <label htmlFor="title">Title</label>
                                    <input {...register("title")} type="text" id="title" />
                                </div>
                                <div>
                                    <label htmlFor="to">To</label>
                                    <input {...register("to")} type="text" id="to" />
                                </div>
                                <div>
                                    <label htmlFor="message">Message</label>
                                    <textarea {...register("message")} id="message" />
                                </div>
                                <div>
                                    {
                                        tracksPlaylist.map(track => (
                                            <TrackList
                                                key={track.id}
                                                track={track}
                                            />
                                        ))
                                    }
                                </div>
                                <button>Create</button>
                            </form>
                        </div>
                    )
                    : null
            }

        </header>
    )
}

export default HeaderMusic