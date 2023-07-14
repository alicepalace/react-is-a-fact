import { useState } from 'react';

const Home = () => {
    //let name = 'emo';
    const [name, setName] = useState('alice');
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName('elmo');
        setAge(30);
    }

    return (
        <div className="home">
            <h2>Home Page (Birthing Site)</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>click me</button>
        </div>
    );
}

export default Home;