const ExercisesList = ({ exercises, title, handleDelete }) => {

    return ( 
        <div className="exercise-list">
            <h2>{ title }</h2>
            {exercises.map( (exercise) => (
                <div className="exercise-preview" key={exercise.id}>
                    <h2>{ exercise.name }</h2>
                    <p>created by { exercise.author }</p>
                    <button onClick={() => handleDelete(exercise.id)}>delete exercise</button>
                </div>
            ))}
        </div>
     );
}
 
export default ExercisesList;