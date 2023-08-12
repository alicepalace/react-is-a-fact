import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddExercise from './AddExercise';
import ExercisesList from './ExercisesList';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/myexercises" element={<ExercisesList />}></Route>
            <Route exact path="/addexercise" element={<AddExercise />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
