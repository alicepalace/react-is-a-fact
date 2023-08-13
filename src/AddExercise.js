import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddExercise = () => {
    const [name, setName] = useState('');
    const [muscle, setMuscle] = useState('');
    const [author, setAuthor] = useState('Alice');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const exercise = { name, muscle, author };

        setIsPending(true);

        fetch('http://localhost:8000/exercises', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(exercise)
        }).then(() => {
            console.log('new exercise added');
            setIsPending(false);
            navigate('/');

        });
    }

    return (
        <div className="create">
            <h2>Add a new exercise to your program</h2>
            <form onSubmit={handleSubmit}>
                <label>Exercise name:</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Muscle used:</label>
                <input
                    type="text"
                    required
                    value={muscle}
                    onChange={(e) => setMuscle(e.target.value)}
                />
                <label>Added by:</label>
                <select>
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    <option value="Alice">Alice</option>
                    <option value="Emor">E</option>
                    <option value="Emor">Elmo</option>
                    <option value="Emor">Ebory</option>
                    <option value="Emor">Entropy</option>
                </select>
                {!isPending && <button>Add Exercise</button>}
                {isPending && <button disabled>Adding Exercise...</button>}

            </form>
        </div>
    );
}

export default AddExercise;