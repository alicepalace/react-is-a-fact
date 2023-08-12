import React from 'react';
import useFetch from './useFetch';

const ExercisesList = () => {

    const { exercises, isPending, error } = useFetch('http://localhost:8000/exercises');

    return (
        <div className="exercise-list">
            <h2>{"All Exercises"}</h2>
            {error && <div> {error} </div>}
            {isPending && <div>Loading... </div>}
            {exercises && exercises.map((exercise) => (
                <div className="exercise-preview" key={exercise.id}>
                    <h2>{exercise.name}</h2>
                    <p>created by {exercise.author}</p>
                </div>
            ))}
        </div>
    );
}

export default ExercisesList;