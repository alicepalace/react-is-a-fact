import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddExercise from './AddExercise';
import ExercisesList from './ExercisesList';
import ExerciseDetails from './ExerciseDetails';
import NotFound from './NotFound';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/myexercises" element={<ExercisesList />}></Route>
            <Route path="/addexercise" element={<AddExercise />}></Route>
            <Route path="/exercises/:id" element={<ExerciseDetails />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
