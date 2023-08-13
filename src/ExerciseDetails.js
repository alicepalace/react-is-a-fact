import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const ExerciseDetails = () => {
    const { id } = useParams();
    console.log(id);
    const { data: exercise, error, isPending } = useFetch('http://localhost:8000/exercises/' + id);
    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8000/exercises/' + exercise.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        })
    }

    return (
        <div className="exercise-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {exercise && (
                <article>
                    <h2>{exercise.name}</h2>
                    <p>Added by {exercise.author}</p>
                    <div>{exercise.muscle}</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
    );
}

export default ExerciseDetails;