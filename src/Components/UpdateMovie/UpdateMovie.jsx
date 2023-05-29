import { useParams } from 'react-router-dom'
import style from './updatemovie.module.css'
import React, { useContext, useEffect } from 'react'
import { MainWrapper } from '../../MainContext/MainContext'


export default function UpdateMovie() {
    const { getOneMovie, displayMovie, handleUpdateChange, handleUpdateSubmit } = useContext(MainWrapper);
    const { id } = useParams();

    const getMovieDetails = () => {
        getOneMovie(id)
    }

    const innerHandleSubmit = (event) => {
        event.preventDefault();
        handleUpdateSubmit(displayMovie.id)
    }

    useEffect(() => {
        getMovieDetails();
    }, [])

    return <>
        <div className={`${style.mainBg} d-flex justify-content-center align-items-start`}>
            <form onSubmit={innerHandleSubmit} className={`w-100 pt-5`}>
                <div className={`w-50 mx-auto`}>
                    <label className={`text-white fs-5`} htmlFor="title">Title</label>
                    <input type="text" name="title" value={displayMovie.title} id='title' className={`form-control my-2`} onChange={handleUpdateChange} />

                    <label className={`text-white fs-5`} htmlFor="overview">Overview</label>
                    <input type="text" name="overview" value={displayMovie.overview} id='overview' className={`form-control my-2`} onChange={handleUpdateChange} />

                    <label className={`text-white fs-5`} htmlFor="video">Video</label>
                    <input type="text" name="video" value={displayMovie.video ? 'Yes' : 'No'} id='video' className={`form-control my-2`} onChange={handleUpdateChange} />

                    <label className={`text-white fs-5`} htmlFor="adult">Adult</label>
                    <input type="text" name="adult" value={displayMovie.adult ? 'Yes' : 'No'} id='adult' className={`form-control my-2`} onChange={handleUpdateChange} />

                    <label className={`text-white fs-5`} htmlFor="popularity">Popularity</label>
                    <input type="text" name="popularity" value={displayMovie.popularity} id='popularity' className={`form-control my-2`} onChange={handleUpdateChange} />

                    <label className={`text-white fs-5`} htmlFor="releaseDate">Release Date</label>
                    <input type="date" name="releaseDate" value={displayMovie.release_date} id='releaseDate' className={`form-control my-2`} onChange={handleUpdateChange} />

                    <label className={`text-white fs-5`} htmlFor="image">Image</label>
                    <input type="text" name="image" value={`https://image.tmdb.org/t/p/w500/${displayMovie.poster_path}`} id='image' className={`form-control my-2`} onChange={handleUpdateChange} />
                </div>
                <div className='text-center my-4'>
                    <button type='submit' className='btn btn-primary py-2 px-4'>Update Movie</button>
                </div>
            </form>
        </div>
    </>
}
