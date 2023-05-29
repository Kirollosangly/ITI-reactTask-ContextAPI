import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


export const MainWrapper = createContext();
export default function MainContext({ children }) {

    const [movies, setMovies] = useState([])
    const [movieDetails, setMovieDetails] = useState({})
    const [collectMovie, setCollectMovie] = useState({})
    const navigate = useNavigate()

    const getMovies = () => {
        axios.get(`http://localhost:3000/results`)
            .then((response) => {
                setMovies(response.data);
            });
    };

    const getOneMovie = (id) => {
        axios.get(`http://localhost:3000/results/${id}`)
            .then((response) => {
                setMovieDetails(response.data);
            });
    };

    //*** *** *** ***
    const addOneMovie = () => {
        console.log(collectMovie);
        axios.post(`http://localhost:3000/results`, collectMovie)
        .then(()=>{getMovies()})
        setMovies((prevMovies) => { return [...prevMovies, collectMovie] });
        navigate('/home');
    }

    const deleteMovie = (id) => {
        axios.delete(`http://localhost:3000/results/${id}`)
            .then(() => { getMovies() });
    };

    const updateMovie = (id) => {
        axios.put(`http://localhost:3000/results/${id}`, movieDetails)
            .then(() => { getMovies() })
            navigate('/home');
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCollectMovie({ ...collectMovie, [name]: value })
    }

    const handleUpdateChange = (e) => {
        const { name, value } = e.target;
        setMovieDetails({ ...movieDetails, [name]: value })
    }


    //*** *** *** ***
    const handleSubmit = (event) => {
        event.preventDefault();
        addOneMovie();
    }

    const handleUpdateSubmit = (id)=>{
        updateMovie(id);
    }

    useEffect(() => {
        getMovies();
    }, []);

    const passedValues = {
        sendMovies: movies,
        displayMovie: movieDetails,
        deleteMovie: deleteMovie,
        updateMovie: updateMovie,
        getOneMovie: getOneMovie,
        addMovie: addOneMovie,
        handleSubmit: handleSubmit,
        handleChange: handleChange,
        handleUpdateChange: handleUpdateChange,
        handleUpdateSubmit: handleUpdateSubmit
    }

    return <>
        <div>
            <MainWrapper.Provider value={passedValues}>
                {children}
            </MainWrapper.Provider>
        </div>
    </>
}
