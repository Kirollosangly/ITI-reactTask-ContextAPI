import React, { useContext, useEffect } from 'react';
import style from './moviedetails.module.css';
import { useParams } from 'react-router-dom';
import { MainWrapper } from './../../MainContext/MainContext';
import defaultPoster from '../../Images/defaultImg.jpg';



export default function MovieDetails() {
    const { displayMovie, getOneMovie } = useContext(MainWrapper)
    const { id } = useParams();

    const getMovieDetails = () => {
        getOneMovie(id)
    }

    useEffect(() => {
        getMovieDetails();
    }, [])

    return <>
        <div className={`${style.MinHeight}`}>
            <div className={`container text-white`}>
                <h2 className={` py-4`}>{displayMovie.title}</h2>
            </div>
            <div className={`container text-white`}>
                <div className="row pt-4 pb-5">
                    <div className="col-md-4">
                        <img src={displayMovie.poster_path ? `https://image.tmdb.org/t/p/w500/${displayMovie.poster_path}`: `${defaultPoster}`} className={`${style.imgScale} card-img-top rounded-3`} alt="MovieName" />
                    </div>
                    <div className="col-md-8 d-flex flex-column justify-content-between align-items-start">
                        <div>
                            <p className={`fs-5`}>Overview: {displayMovie.overview}</p>
                            <p className={`fs-5`}>Video Available: {displayMovie.video ? 'Yes' : 'No'}</p>
                            <p className={`fs-5`}>Adult Movie: {displayMovie.adult ? 'Yes' : 'No'}</p>
                        </div>
                        <div>
                            <p className={`m-0`}>Release Date: {displayMovie.release_date}</p>
                            <p>Popularity: {displayMovie.popularity}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
