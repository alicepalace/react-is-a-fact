import { useState, useEffect} from 'react';

const useFetch = (url) => {
    const [exercises, setExercises] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
        .then( res => {
            console.log(res);
            if (!res.ok) {
                throw Error('Could not fetch the data for that resource');
            }
            return res.json();
        })
        .then( data => {
            setExercises(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            setIsPending(false);
            setError(err.message);
        })
    }, []);
    return ({exercises, isPending, error});
}
 
export default useFetch;