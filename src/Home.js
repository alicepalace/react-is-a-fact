import ExercisesList from './ExercisesList';
import useFetch from './useFetch';

const Home = () => {

    const {exercises, isPending, error} = useFetch('http://localhost:8000/exercises');

    return (
        <div className="home">
            <h2>Home Page (Birthing Site)</h2>
            { error && <div> {error} </div>}
            { isPending && <div>Loading... </div> }
            { exercises && <ExercisesList exercises={exercises} title="All Exercises!" />}
        </div>
    );
}

export default Home;