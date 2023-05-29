import React, { useContext } from 'react';
import style from './addMovie.module.css';
import { MainWrapper } from './../../MainContext/MainContext';


export default function AddMovie() {
    const { handleChange, handleSubmit } = useContext(MainWrapper)
    return <>
        <div className={`${style.mainBg} d-flex justify-content-center align-items-start`}>
            <form onSubmit={handleSubmit} className={`w-100 pt-5`}>
                <div className={`w-50 mx-auto`}>
                    <label className={`text-white fs-5`} htmlFor="title">Title</label>
                    <input type="text" name="title" id='title' className={`form-control my-2`} onChange={handleChange} />

                    <label className={`text-white fs-5`} htmlFor="overview">Overview</label>
                    <input type="text" name="overview" id='overview' className={`form-control my-2`} onChange={handleChange} />

                    <label className={`text-white fs-5`} htmlFor="video">Video</label>
                    <input type="text" name="video" id='video' className={`form-control my-2`} onChange={handleChange} />

                    <label className={`text-white fs-5`} htmlFor="adult">Adult</label>
                    <input type="text" name="adult" id='adult' className={`form-control my-2`} onChange={handleChange} />

                    <label className={`text-white fs-5`} htmlFor="popularity">Popularity</label>
                    <input type="text" name="popularity" id='popularity' className={`form-control my-2`} onChange={handleChange} />

                    <label className={`text-white fs-5`} htmlFor="releaseDate">Release Date</label>
                    <input type="date" name="releaseDate" id='releaseDate' className={`form-control my-2`} onChange={handleChange} />

                    <label className={`text-white fs-5`} htmlFor="image">Image</label>
                    <input type="file" name="image" id='image' className={`form-control my-2`} onChange={handleChange} />
                </div>
                <div className='text-center my-4'>
                    <button type='submit' className='btn btn-primary py-2 px-4'>Add Movie</button>
                </div>
            </form>

        </div>
    </>
}
