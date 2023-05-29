import { Link } from 'react-router-dom';
import style from './movies.module.css';
import React, { useContext } from 'react'
import { MainWrapper } from './../../MainContext/MainContext';
import defaultPoster from '../../Images/defaultImg.jpg';


export default function Movies({ sendOneMovie }) {
    const { deleteMovie, getOneMovie } = useContext(MainWrapper);

    const getMovieDetails = () => {
        getOneMovie(sendOneMovie.id)
    }

    const childDelete = () => {
        deleteMovie(sendOneMovie.id);
    }

    return <>
        <div>
            <div className={`${style.mainCard} card`}>
                <div className={`${style.imgCon} overflow-hidden rounded-2`}>
                <img src={sendOneMovie.poster_path? `https://image.tmdb.org/t/p/w500/${sendOneMovie.poster_path}`:`${defaultPoster}`} className={`${style.imgScale} card-img-top rounded-3`} alt="MovieName" />
                </div>
                <div className="card-body d-flex flex-column justify-content-around align-items-start">
                    <h5 className="card-title">{sendOneMovie.title}</h5>
                    <p className="card-text">{sendOneMovie.overview.split(' ').slice(0, 8).join(' ')}...<Link to={`/moviedetails/${sendOneMovie.id}`} onClick={getMovieDetails} className={`${style.seeMore} text-primary`}>See More</Link></p>
                    <div>
                        <Link to={`/update/${sendOneMovie.id}`} className={`btn btn-outline-primary`}>Update</Link>
                        <button onClick={childDelete} className={`btn btn-outline-primary mx-2`}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}
