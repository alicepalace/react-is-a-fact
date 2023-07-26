import { useState, useEffect } from 'react';
import ExercisesList from './ExercisesList';

const Home = () => {

    const [exercises, setExercises] = useState([
        { name: 'Glute Bridge', muscle: 'Glutes', author: 'alice', id: 1 },
        { name: 'Plank', muscle: 'Rectus abdominis', author: 'alice', id: 2 },
        { name: 'Prone-Y', muscle: 'Lower Trapezius', author: 'alice', id: 3 }
    ]);

    const handleDelete = (id) => {
        const newExercises = exercises.filter(exercises => exercises.id !== id);
        setExercises(newExercises);
    }

    useEffect(() => {
        console.log('use effect ran');
        console.log(exercises);
    });

    return (
        <div className="home">
            <h2>Home Page (Birthing Site)</h2>
            <ExercisesList exercises={exercises} title="All Exercises!" handleDelete = {handleDelete}/>
            {/* <ExercisesList exercises={exercises.filter((exercise) => exercise.author === 'alice')} title="Alice's exercises" /> */}
        </div>
    );
}

export default Home;