import React, { useContext } from 'react'
import Movies from '../Movies/Movies'
// import style from './home.module.css'
import { v4 as uuid } from 'uuid';
import { MainWrapper } from './../../MainContext/MainContext';



export default function Home() {

    const { sendMovies } = useContext(MainWrapper)
    return <>
        <div className={`overflow-hidden`}>
            <div className="container">
                <div className="row pb-4">
                    {sendMovies.map((oneMovie) => {
                        return <div className='col-md-3 g-2 rounded-2' key={uuid()}>
                            <Movies sendOneMovie={oneMovie} />
                        </div>
                    })}
                </div>
            </div>
        </div>
    </>
}
